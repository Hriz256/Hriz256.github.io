class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');

        this.fullScreen = false;

        this.chips = {
            chipsArray: [],
            numberOfChip: 0,
            numberOfSelectedChip: 0,
            start: true
        };

        this.musics = {
            isOn: localStorage.getItem('musicOn') || true,
            background: null,
            goodLuck: null,
            placeYourBets: null,
        };

        this.chipsValue = {};
        this.currentStakeValue = 0;
        this.currentBalance = 0;
        this.historyWinBalls = [];
        this.isStart = false;
        this.hideMenu = false;
        this.winMoney = 0;
        this.statisticsArray = [];
        this.statisticOpen = false;
    }

    preload() {
        this.load.audio('backgroundMusic', 'music/background-music.mp3');
        this.load.audio('goodLuck', 'music/good_luck.mp3');
        this.load.audio('placeYourBets', 'music/place_your_bets.mp3');

        for (let i = 0; i < 37; i++) {
            this.load.audio(`sound_0${i}`, `music/sounds/sound_0${i}.mp3`);
        }

        this.load.image('moveButton', 'images/move.png');
        this.load.image('previousChip', 'images/previous_chip.png');
        this.load.image('nextChip', 'images/next_chip.png');
        this.load.image('lobbyPanel', 'images/lobby-panel.png');
        this.load.image('minMaxBet', 'images/min&max_bet.png');
        this.load.image('balanceDisplay', 'images/balance_display.png');
        this.load.image('winBallDisplay', 'images/win_ball-display.png');
        this.load.image('text_bg', 'images/text_bg.png');
        this.load.image('placeYourBets', 'images/placeYourBets.png');
        this.load.image('goodLuck', 'images/goodLuckText.png');
        this.load.image('depositPopup', 'images/deposit-popup.png');
        this.load.image('cold', 'images/cold_emblem.png');
        this.load.image('hot', 'images/hot_emblem.png');
        this.load.spritesheet('buttonDeposit', 'images/button-deposit.png', {
            frameWidth: 113,
            frameHeight: 44,
            endFrame: 4
        });
        this.load.spritesheet('informationBtn', 'images/informationBtn.png', {
            frameWidth: 60,
            frameHeight: 39.5,
            endFrame: 4
        });
        this.load.spritesheet('musicBtn', 'images/musicBtn.png', {
            frameWidth: 54,
            frameHeight: 40.5,
            endFrame: 8
        });
        this.load.spritesheet('windowBtn', 'images/windowBtn.png', {
            frameWidth: 53,
            frameHeight: 40.2,
            endFrame: 8
        });
        this.load.spritesheet('exitBtn', 'images/exitBtn.png', {
            frameWidth: 54,
            frameHeight: 40.6,
            endFrame: 4
        });
        this.load.spritesheet('openHistoryBtn', 'images/openHistoryBtn.png', {
            frameWidth: 101,
            frameHeight: 131,
            endFrame: 8
        });
        this.load.spritesheet('spinBtn', 'images/spinBtn.png', {
            frameWidth: 171,
            frameHeight: 141,
            endFrame: 4
        });
        this.load.spritesheet('quickspinBtn', 'images/quickspinBtn.png', {
            frameWidth: 170,
            frameHeight: 141,
            endFrame: 4
        });
        this.load.spritesheet('rebetBtn', 'images/rebetBtn.png', {
            frameWidth: 105,
            frameHeight: 131,
            endFrame: 4
        });
        this.load.spritesheet('clearAllBtn', 'images/clearAllBtn.png', {
            frameWidth: 101,
            frameHeight: 131,
            endFrame: 4
        });
        this.load.spritesheet('undoBttn', 'images/undoBttn.png', {
            frameWidth: 105,
            frameHeight: 131,
            endFrame: 4
        });
        this.load.spritesheet('buttonChips', 'images/chips.png', {
            frameWidth: 117,
            frameHeight: 117,
            endFrame: 19
        });
    }

    create() {
        this.scene.launch('Deposit');
        this.scene.bringToTop();
        this.musics.isOn = this.musics.isOn !== 'false';
        this.input.mouse.disableContextMenu();

        this.musics.background = this.sound.add('backgroundMusic');
        this.musics.goodLuck = this.sound.add('goodLuck');
        this.musics.placeYourBets = this.sound.add('placeYourBets');

        for (let i = 0; i < 37; i++) {
            this.musics[`sound_0${i}`] = this.sound.add(`sound_0${i}`)
        }

        this.musics.isOn && this.musics.background.play();

        const textBg = this.add.image(0, 0, 'text_bg').setScale(0.7);
        const placeYourBets = this.add.image(0, 0, 'placeYourBets');
        this.placeYourBetsContainer = this.add.container(670, 660, [textBg, placeYourBets]).setDepth(500).setScale(0);

        const goodLuck = this.add.image(0, 0, 'goodLuck');
        this.goodLuckContainer = this.add.container(670, 660, [textBg, goodLuck]).setDepth(500).setScale(0);
    }

    update() {
        if (this.isStart) {
            if (runByButton || this.hideMenu) {
                this.switchVisibleButtons(0, 1, 'all');
            } else {
                this.switchVisibleButtons(1, 0, 'all');

                !game.scene.keys['Field'].allowUndo ?
                    this.switchVisibleButtons(0, 1, 'undoBttn') :
                    this.switchVisibleButtons(1, 0, 'undoBttn');

                !game.scene.keys['Field'].allowClear ?
                    this.switchVisibleButtons(0, 1, 'clearAllBtn') :
                    this.switchVisibleButtons(1, 0, 'clearAllBtn');

                !game.scene.keys['Field'].allowRebet ?
                    this.switchVisibleButtons(0, 1, 'rebetBtn') :
                    this.switchVisibleButtons(1, 0, 'rebetBtn');
            }
        }
    }

    setLengFile(file) {
        this.depositText = file['deposit'];
        this.minBetText = file['minBet'];
        this.maxBetText = file['maxBet'];
        this.spinText = file['spin'];
        this.quickSpinText = file['quickSpin'];
        this.balanceText = file['balance'];
        this.stakeText = file['stake'];
        this.winText = file['win'];
        this.undoText = file['undo'];
        this.clearText = file['clear'];
        this.rebetText = file['rebet'];
    }

    createElemsAfterDeposit(balance) {
        this.currentBalance = balance;
        this.createTopPanel();
        this.createChipsContainer();
        this.createBottomPanel();
        this.panelMoveAnimation();
        this.winBallsMoveAnim(true);
        this.showTitle(this.placeYourBetsContainer);
        this.isStart = true;
    }

    showTitle(target) {
        const alphaCallback = () => {
            target.setScale(0).setAlpha(1)
        };

        const scaleCallback = () => {
            setTimeout(() => {
                game.scene.keys['Animation'].alpha({target, duration: 350, alpha: 0, callback: alphaCallback});
            }, 1000)
        };

        target === this.placeYourBetsContainer && this.turnOffTheMusic('placeYourBets');
        game.scene.keys['Animation'].scales({target, duration: 400, callback: scaleCallback});
    }

    switchVisibleButtons(first, second, item) {
        if (item === 'all') {
            this.bottomPanel.list.forEach(i => i.list && !i.dontAllow && i.list.forEach(j => {
                j.type === 'Sprite' && j.setAlpha(first);
                j.type === 'Image' && j.setAlpha(second);
            }));
        } else if (item === 'undoBttn') {
            this.undoBttn.setAlpha(first);
            this.undoBttnWithoutPointer.setAlpha(second);
        } else if (item === 'clearAllBtn') {
            this.clearAllBtn.setAlpha(first);
            this.clearAllBtnWithoutPointer.setAlpha(second);
        } else if (item === 'rebetBtn') {
            this.rebetBtn.setAlpha(first);
            this.rebetBtnWithoutPointer.setAlpha(second);
        }
    }

    turnOffTheMusic(sound = 'background') {
        this.musics.isOn ? this.musics[sound].play() : Object.values(this.musics).forEach(i => typeof i === 'object' && i.stop());
    }

    animRefillStake({bet, action, isStake = true, isWin = false}, endGame = false) {
        let count = 0;
        let initWinBalance = action === 'add' ? 0 : bet;

        const interval = setInterval(() => {
            if (count < 10) {
                if (!isWin) {
                    if (isStake) {
                        action === 'add' ? this.currentStakeValue += bet / 10 : this.currentStakeValue -= bet / 10;

                        this.stakeValue.setText(this.format(this.currentStakeValue));
                    } else {
                        action === 'add' ? this.currentBalance += bet / 10 : this.currentBalance -= bet / 10;

                        this.balanceValue.setText(this.format(this.currentBalance));
                    }
                } else {
                    action === 'add' ? initWinBalance += bet / 10 : initWinBalance -= bet / 10;

                    this.winValue.setText(this.format(initWinBalance));
                }

                count++;
            } else {
                if (endGame) {
                    this.currentBalance = this.balanceAfterWin;
                    this.balanceValue.setText(this.format(this.currentBalance));
                }

                clearInterval(interval)
            }
        }, 50)
    }

    format(total) {
        const removeMinus = (total) => {
            return total <= 0 ? 0 : total
        };

        if (total < 10000) {
            return `${removeMinus(total).toFixed(2)}`
        } else if (total >= 10000 && total < 1000000) {
            return `${(total / 1000).toFixed(1)}K`
        } else if (total >= 100000 && total < 1000000) {
            return `${(total / 10000).toFixed(1)}K`
        } else if (total >= 1000000) {
            return `${(total / 1000000).toFixed(3)}M`
        }
    }

    createTopPanel() {
        const topLobbyPanel = this.add.image(0, 0, 'lobbyPanel').setOrigin(0).setScale(1.1, 0.73);
        const minMaxBetDisplay = this.add.image(0, 0, 'minMaxBet')
            .setOrigin(0)
            .setInteractive({cursor: 'pointer'})
            .setScale(0.83, 0.76);
        const minText = this.add.text(15, 10, `${this.minBetText}: `, {
            font: "13px fusion", fill: "#05df67"
        });
        this.minValue = this.add.text(85, 8, `${this.format(Object.values(this.chipsValue)[0])}`, {
            font: "16px fusion", fill: "#fff"
        });
        const maxText = this.add.text(180, 10, `${this.maxBetText}: `, {
            font: "13px fusion", fill: "#05df67"
        });

        const max = this.format(Object.values(this.chipsValue)[Object.values(this.chipsValue).length - 1]);

        this.maxValue = this.add.text(260, 8, `${max}`, {
            font: "16px fusion", fill: "#fff"
        });
        const minMaxBetContainer = this.add.container(203, 13, [minMaxBetDisplay, minText, this.minValue, maxText, this.maxValue]);

        const balanceDisplay = this.add.image(0, 0, 'balanceDisplay')
            .setOrigin(0)
            .setInteractive({cursor: 'pointer'})
            .setScale(0.72, 0.73);
        const balanceText = this.add.text(15, 10, `${this.balanceText}: `, {
            font: "13px fusion", fill: "#05df67"
        });
        this.balanceValue = this.add.text(140, 8, this.format(this.currentBalance), {
            font: "16px fusion", fill: "#fff"
        }).setOrigin(1, 0);
        const balanceContainer = this.add.container(556, 13, [balanceDisplay, balanceText, this.balanceValue]);

        const stakeDisplay = this.add.image(0, 0, 'balanceDisplay')
            .setOrigin(0)
            .setInteractive({cursor: 'pointer'})
            .setScale(0.72, 0.73);
        const stakeText = this.add.text(25, 10, `${this.stakeText}: `, {
            font: "13px fusion", fill: "#05df67"
        });
        this.stakeValue = this.add.text(140, 8, '0.00', {
            font: "16px fusion", fill: "#fff"
        }).setOrigin(1, 0);

        const stakeContainer = this.add.container(731, 13, [stakeDisplay, stakeText, this.stakeValue]);

        const winDisplay = this.add.image(0, 0, 'balanceDisplay')
            .setOrigin(0)
            .setInteractive({cursor: 'pointer'})
            .setScale(0.72, 0.73);
        const winText = this.add.text(30, 10, `${this.winText}: `, {
            font: "13px fusion", fill: "#05df67"
        });
        this.winValue = this.add.text(140, 8, `${this.format(0)}`, {
            font: "16px fusion", fill: "#fff"
        }).setOrigin(1, 0);
        const winContainer = this.add.container(909, 13, [winDisplay, winText, this.winValue]);

        const buttonDeposit = this.buttonSettings(0, 0, 'buttonDeposit');
        const textDeposit = this.add.text(22, 8, `${this.depositText}`, {
            font: "20px fusion",
            fill: "#fff"
        }).setStroke('#000', 5);
        const depositContainer = this.add.container(10, 10, [buttonDeposit, textDeposit]);
        const informationBtn = this.buttonSettings(1097, 11, 'informationBtn');
        const musicBtn = this.buttonSettings(1161, 11, 'musicBtn');
        const windowBtn = this.buttonSettings(1222, 11, 'windowBtn');
        const exitBtn = this.buttonSettings(1284, 11, 'exitBtn');
        this.buttonMoveUp = this.add.image(1320, 75, 'moveButton').setOrigin(1, 0).setScale(0.5).setInteractive({cursor: 'pointer'}).setAlpha(isMobile ? 1 : 0);
        this.buttonMoveDown = this.add.image(1256, 139, 'moveButton').setOrigin(1, 0).setScale(0.5).setInteractive({cursor: 'pointer'}).setAlpha(0).setAngle(180);

        this.buttonMoveUp.on('pointerdown', () => game.scene.keys['WorldGame'].zoom(true));
        this.buttonMoveDown.on('pointerdown', () => game.scene.keys['WorldGame'].zoom(true));

        this.topPanel = this.add.container(0, -100, [topLobbyPanel, depositContainer, minMaxBetContainer, balanceContainer,
            stakeContainer, winContainer, informationBtn, musicBtn, windowBtn, exitBtn, this.buttonMoveUp, this.buttonMoveDown]).setDepth(100);
    }

    buttonMoveRotate(moveDown) {
        if (moveDown) {
            this.buttonMoveUp.setAlpha(1);
            this.buttonMoveDown.setAlpha(0)
        } else {
            this.buttonMoveUp.setAlpha(0);
            this.buttonMoveDown.setAlpha(1)
        }
    }

    color(ball) {
        if (game.scene.keys['WorldGame'].blackNumbers.find(number => number === ball)) {
            return '#cccccc'
        } else if (game.scene.keys['WorldGame'].redNumbers.find(number => number === ball)) {
            return '#ff0000'
        } else if (game.scene.keys['WorldGame'].greenNumbers === ball) {
            return '#00ff00'
        }
    }

    setHotAndColdNumbers(array) {
        this.statisticsArray = [...array];

        this.createStatistics();
    }

    createText(i, isStartGame, ball) {
        const x = isStartGame ? i * 30 - 170 : -20;

        return this.add.text(x, 7, `${ball}`, {font: "18px Arial", fill: this.color(ball)});
    }

    createBottomPanel() {
        const bottomLobbyPanel = this.add.image(0, 0, 'lobbyPanel').setOrigin(0).setScale(1.1, 0.73);
        const bottomLobbyPanel2 = this.add.image(135, 0, 'lobbyPanel').setOrigin(1, 0).setScale(1.1, 0.73);
        const winBallDisplay = this.add.image(0, 0, 'winBallDisplay').setOrigin(0).setScale(0.71, 0.71);
        this.winNumbers = [];

        this.historyWinBalls.forEach((i, index) => this.winNumbers.push(this.createText(index, true, i)));

        this.winBallsContainer = this.add.container(135, 12, [winBallDisplay, ...this.winNumbers]);
        this.winBallsContainer.dontAllow = true;

        const spinBtn = this.buttonSettings(0, 0, 'spinBtn', 0.7, 0.69);
        const spinBtnWithoutPointer = this.add.image(0, 0, 'spinBtn').setOrigin(0).setScale(0.7, 0.69).setAlpha(0);
        const textSpin = this.add.text(58, 40, `${this.spinText}`, {
            font: "24px fusion",
            fill: "#fff"
        }).setStroke('#000', 5).setOrigin(0.5);
        const spinContainer = this.add.container(1199, -12, [spinBtn, spinBtnWithoutPointer, textSpin]);

        const quickspinBtn = this.buttonSettings(0, 0, 'quickspinBtn', 0.68, 0.71);
        const quickspinBtnWithoutPointer = this.add.image(0, 0, 'quickspinBtn').setOrigin(0).setScale(0.68, 0.71).setAlpha(0);
        const textQuickSpin = this.add.text(58, 48, `${this.quickSpinText}`, {
            font: "22px fusion", fill: "#fff"
        }).setStroke('#000', 5).setOrigin(0.5);
        const quickSpinContainer = this.add.container(1076, -17.5, [quickspinBtn, quickspinBtnWithoutPointer, textQuickSpin]);

        const openHistoryBtn = this.buttonSettings(0, 0, 'openHistoryBtn', 0.7, 0.7);
        const openHistoryBtnWithoutPointer = this.add.image(0, 0, 'openHistoryBtn').setOrigin(0).setScale(0.7).setAlpha(0);
        const historyContainer = this.add.container(26, -6, [openHistoryBtn, openHistoryBtnWithoutPointer]);

        this.rebetBtn = this.buttonSettings(0, 0, 'rebetBtn', 0.7, 0.7).setAlpha(0);
        this.rebetBtnWithoutPointer = this.add.image(0, 0, 'rebetBtn').setOrigin(0).setScale(0.7);
        const textRebet = this.add.text(35, 35, `${this.rebetText}`, {
            font: "21px fusion",
            fill: "#fff"
        }).setStroke('#000', 5).setOrigin(0.5);
        const rebetContainer = this.add.container(993, -1, [this.rebetBtn, this.rebetBtnWithoutPointer, textRebet]);

        this.clearAllBtn = this.buttonSettings(0, 0, 'clearAllBtn', 0.7, 0.7);
        this.clearAllBtnWithoutPointer = this.add.image(0, 0, 'clearAllBtn').setOrigin(0).setScale(0.7);
        const textClear = this.add.text(35, 30, `${this.clearText}`, {
            font: "21px fusion",
            fill: "#fff"
        }).setStroke('#000', 5).setOrigin(0.5);
        const clearContainer = this.add.container(911, 3, [this.clearAllBtn, this.clearAllBtnWithoutPointer, textClear]);

        this.undoBttn = this.buttonSettings(0, 0, 'undoBttn', 0.7, 0.7);
        this.undoBttnWithoutPointer = this.add.image(0, 0, 'undoBttn').setOrigin(0).setScale(0.7);
        const textUndo = this.add.text(35, 33, `${this.undoText}`, {
            font: "22px fusion",
            fill: "#fff"
        }).setStroke('#000', 5).setOrigin(0.5);
        const undoContainer = this.add.container(826, 0, [this.undoBttn, this.undoBttnWithoutPointer, textUndo]);

        this.bottomPanel = this.add.container(0, 800, [bottomLobbyPanel, this.winBallsContainer, bottomLobbyPanel2,
            historyContainer, rebetContainer, clearContainer, undoContainer, quickSpinContainer, spinContainer]);
    }

    panelMoveAnimation() {
        game.scene.keys['Animation'].move({target: this.topPanel, y: 0, duration: 500, yoyo: false});
        game.scene.keys['Animation'].move({
            target: [this.bottomPanel, this.mainChipsContainer],
            y: 700,
            duration: 500,
            yoyo: false
        });
    }

    changeWinBalls(ballNumber) {
        const newBall = this.createText(0, false, ballNumber);

        this.winBallsContainer.list.length--;
        this.winBallsContainer.list.splice(1, 0, newBall);

        this.winBallsMoveAnim();
    }

    winBallsMoveAnim(isStartGame = false) {
        game.scene.keys['Animation'].move({
            target: [...this.winBallsContainer.list.slice(1)],
            x: isStartGame ? '+=182' : '+=30',
            duration: isStartGame ? 1500 : 80,
            yoyo: false
        })
    }

    chipsAnimation({target, isArrow, action, direction}) {
        game.scene.keys['Animation'].scales({
            target: target,
            duration: 150,
            scale: isArrow ? action === 'decrease' ? 0.67 : 0.73 : action === 'decrease' ? 0.5 : 0.64
        });

        if (direction) {
            this.tweens.add({
                targets: target,
                x: direction === 'next' ? 290 : 0,
                props: {
                    x: {
                        value: direction === 'next' ? 310 : -20
                    }
                },
                ease: 'linear',
                duration: 1500,
                yoyo: true,
                repeat: -1
            });
        }

        const indexChip = this.chips.chipsArray.findIndex(i => i === target && target.width === 117);

        if (indexChip !== -1) game.scene.keys['Field'].currentChip = indexChip;
    }

    createChips(direction = 'next') {
        const alpha = (first, second) => {
            const chips = this.chipsContainer.list;
            const firstElem = Object.keys(this.chipsValue)[this.chips.numberOfChip];
            const secondElem = Object.keys(this.chipsValue)[this.chips.numberOfChip + first];
            const thirdElem = Object.keys(this.chipsValue)[this.chips.numberOfChip + second];

            chips[this.chips.numberOfChip] && chips[this.chips.numberOfChip].setAlpha(this.canMakeABet(firstElem) ? 1 : 0.5);
            chips[this.chips.numberOfChip + first] && chips[this.chips.numberOfChip + first].setAlpha(this.canMakeABet(secondElem) ? 1 : 0.5);
            chips[this.chips.numberOfChip + second] && chips[this.chips.numberOfChip + second].setAlpha(this.canMakeABet(thirdElem) ? 1 : 0.5);
        };

        this.chipsContainer.list.forEach(i => i.setAlpha(0));

        direction === 'previous' ? alpha(-2, -1) : alpha(1, 2)
    }

    createStatistics() {
        const bgGraphics = this.add.graphics().fillStyle(0x000000, 1).lineStyle(1.5, 0x006987);
        const graphics = this.add.graphics({lineStyle: {width: 0.5, color: 0xffffff}});
        const blackCircleGraphics = this.add.graphics({fillStyle: {color: 0x000000}});
        const textArray = [], polygonsArray = [];
        const delta = Math.PI * 2 / game.scene.keys['Field'].fiveCells.slice(0, -4).length;
        const center = {x: 250, y: 410};
        let value = 130, angle = 0;

        // Для отображения 5 чисел на диаграмме

        const coldNumbers = [...this.statisticsArray].sort((a, b) => a - b).slice(0, 5);
        const hotNumbers = [...this.statisticsArray].sort((a, b) => b - a).slice(0, 5);

        // Для отображения 10 чисел возле картинок

        const coldNumbersText = [...this.statisticsArray].sort((a, b) => a - b).slice(0, 11);
        const hotNumbersText = [...this.statisticsArray].sort((a, b) => b - a).slice(0, 11);

        const isColdOrHotElem = (number) => {
            const color = {
                hot: '0xff6d00',
                cold: '0x1c75bb',
                whiteNumber: '0x808080',
                redNumber: '0xcf0200',
                greenNumber: '0x00ff00'
            };

            if (coldNumbers.find(i => i === this.statisticsArray[+number]) ||
                coldNumbers.find(i => i === this.statisticsArray[+number]) === 0) {
                return color.cold;
            } else if (hotNumbers.find(i => i === this.statisticsArray[+number]) ||
                hotNumbers.find(i => i === this.statisticsArray[+number]) === 0) {
                return color.hot;
            } else {
                if (game.scene.keys['WorldGame'].blackNumbers.find(i => i === +number) ||
                    game.scene.keys['WorldGame'].blackNumbers.find(i => i === +number) === 0) {
                    return color.whiteNumber;
                } else if (game.scene.keys['WorldGame'].redNumbers.find(i => i === +number) ||
                    game.scene.keys['WorldGame'].redNumbers.find(i => i === +number) === 0) {
                    return color.redNumber
                } else if (game.scene.keys['WorldGame'].greenNumbers === +number) {
                    return color.greenNumber;
                }
            }
        };

        const createHotAndColdDisplays = () => {
            bgGraphics.lineStyle(2, 0x808080);
            bgGraphics.strokeRoundedRect(20, 20, 460, 70, 5);
            bgGraphics.strokeRoundedRect(20, 120, 460, 70, 5);

            const coldTextNumbers = coldNumbersText.map((i, index) => {
                const number = this.statisticsArray.findIndex(item => item === i);

                return this.add.text(34 * index, 0, `${number}`, {
                    font: "24px Arial",
                    fill: this.color(number)
                }).setOrigin(0.5)
            });

            const hotTextNumbers = hotNumbersText.map((i, index) => {
                const number = this.statisticsArray.findIndex(item => item === i);

                return this.add.text(34 * index, 0, `${number}`, {
                    font: "24px Arial",
                    fill: this.color(number)
                }).setOrigin(0.5)
            });

            return [
                this.add.image(25, 25, 'cold').setOrigin(0).setScale(0.75),
                this.add.image(25, 125, 'hot').setOrigin(0).setScale(0.75),
                this.add.container(105, 55, [...coldTextNumbers]),
                this.add.container(105, 155, [...hotTextNumbers]),
            ]
        };

        bgGraphics.fillRoundedRect(0, 0, 500, 610, 10).setAlpha(0.8);
        bgGraphics.strokeRoundedRect(0, 0, 500, 610, 10);

        game.scene.keys['Field'].fiveCells.slice(0, -4).forEach(i => {
            const color = isColdOrHotElem(i);
            const text = this.add.text(
                center.x + 160 * Math.cos(angle + 0.085),
                center.y + 160 * Math.sin(angle + 0.085),
                `${i}`,
                {fill: this.color(+i), font: "17px Arial"}
            ).setOrigin(0.5, 0);
            text.angle = (Math.atan2(text.y - center.y, text.x - center.x) * 180 / Math.PI) + 90;
            textArray.push(text);

            graphics.strokeLineShape(new Phaser.Geom.Line(center.x, center.y, center.x + 175 * Math.cos(angle), center.y + 175 * Math.sin(angle)));

            value = 130 * (this.statisticsArray[+i] / 100);
            const polygon = this.add.polygon(center.x, center.y, [
                0, 0,
                value * Math.cos(angle), value * Math.sin(angle),
                value * Math.cos(angle + delta), value * Math.sin(angle + delta),
                0, 0
            ], color).setOrigin(0);

            polygonsArray.push(polygon);

            angle += delta;
        });

        const images = createHotAndColdDisplays();

        graphics.lineStyle(1.5, 0xffffff);
        graphics.strokeCircleShape(new Phaser.Geom.Circle(center.x, center.y, 175));
        graphics.strokeCircleShape(new Phaser.Geom.Circle(center.x, center.y, 130));
        blackCircleGraphics.fillCircleShape(new Phaser.Geom.Circle(center.x, center.y, 17));

        const textArrayContainer = this.add.container(0, 0, [...textArray]);
        const polygonsArrayContainer = this.add.container(0, 0, [...polygonsArray]);

        this.add.zone(5, 90, 500, 610).setOrigin(0).setName('Open').setInteractive();

        this.input.on('pointerdown', (pointer) => {
            if (pointer.x <= 5 || pointer.x >= 505 || pointer.y <= 90 || pointer.y >= 700) {
                this.statisticContainer.destroy()
            }
        });


        this.statisticContainer = this.add.container(5, 90, [
            bgGraphics, textArrayContainer, graphics, ...images, polygonsArrayContainer, blackCircleGraphics
        ]);
    }

    createChipsContainer() {
        const self = this;

        this.previousChip = this.add.image(0, 14, 'previousChip').setOrigin(0).setInteractive({cursor: 'pointer'}).setScale(0.67);
        this.nextChip = this.add.image(290, 14, 'nextChip').setOrigin(0).setInteractive({cursor: 'pointer'}).setScale(0.67);
        this.chipsSettings();
        this.createChips();
        this.chipsAnimation({target: this.previousChip, direction: 'previous'});
        this.chipsAnimation({target: this.nextChip, direction: 'next'});

        this.previousChip.on('pointerdown', pointer => {
            if (pointer.leftButtonDown() && this.chips.numberOfChip > 0) {
                this.chipsAnimation({target: this.chips.chipsArray[this.chips.numberOfChip], action: 'decrease'});
                this.chips.numberOfChip--;

                (this.chips.numberOfChip + 1) % 3 === 0 && this.chips.numberOfChip > 0 && this.createChips('previous');
                this.chipsAnimation({target: this.chips.chipsArray[this.chips.numberOfChip]});
            }
        });

        this.previousChip.on('pointerover', function () {
            self.chipsAnimation({target: this, action: 'increase', isArrow: true});
        });

        this.previousChip.on('pointerout', function () {
            self.chipsAnimation({target: this, action: 'decrease', isArrow: true});
        });

        this.nextChip.on('pointerdown', pointer => {
            if (pointer.leftButtonDown()) {
                if (this.chips.numberOfChip < this.chipsContainer.list.length - 1) {
                    this.chipsAnimation({target: this.chips.chipsArray[this.chips.numberOfChip], action: 'decrease'});
                    this.chips.numberOfChip++;

                    this.chips.numberOfChip % 3 === 0 && this.createChips();
                    this.chipsAnimation({target: this.chips.chipsArray[this.chips.numberOfChip]});
                }
            }
        });

        this.nextChip.on('pointerover', function () {
            self.chipsAnimation({target: this, action: 'increase', isArrow: true});
        });

        this.nextChip.on('pointerout', function () {
            self.chipsAnimation({target: this, action: 'decrease', isArrow: true});
        });
    }

    canMakeABet(i) {
        return this.chipsValue[`${i}`] <= this.currentBalance
    }

    setChips(chips) {
        const chipsValue = {};
        let value = 0.1;

        for (let i = 0; i < 19; i++) { // 19 - количество фишек
            chipsValue['0'] = 0.1;

            if (i > 0) chipsValue[`${i}`] = i % 2 === 0 ? value *= 2 : value *= 5;
        }

        this.chipsValue = Object.fromEntries(Object.entries(chipsValue).filter(i => chips.find(j => j === i[1])));
    }

    chipsSettings() {
        const self = this;
        let x = 0;

        Object.keys(this.chipsValue).forEach((i, index) => {
            const chip = this.add.image(x, 0, 'buttonChips').setOrigin(0.5, 1)
                .setFrame(i)
                .setInteractive({cursor: 'pointer'})
                .setScale(!index && self.chips.start ? 0.65 : 0.5)
                .setAlpha(this.canMakeABet(i) ? 1 : 0.5);

            chip.on('pointerdown', function (pointer) {
                const chips = self.chips;

                if (pointer.leftButtonDown()) {
                    self.chipsAnimation({target: self.chips.chipsArray[self.chips.numberOfChip], action: 'decrease'});
                    self.chipsAnimation({target: this});
                    chips.numberOfChip = chips.chipsArray.findIndex(chip => chip === this);
                }
            });

            this.chips.chipsArray.push(chip);

            x === 160 ? x = 0 : x += 80;
        });

        self.chips.start = false;

        this.chipsContainer = this.add.container(85, 60, [...this.chips.chipsArray]);
        this.mainChipsContainer = this.add.container(472, 800, [this.previousChip, this.chipsContainer, this.nextChip]).setDepth(400);
    }

    startSpin(time, duration, isQuick) {
        const {winMoney, winNom, balance} = game2.bindSpin(isQuick);

        this.winMoney = winMoney;
        this.balanceAfterWin = balance;
        this.showTitle(this.goodLuckContainer);
        game.scene.keys['WorldGame'].fallOption(time, duration, winNom);
        game.scene.keys['Field'].saveLastBets();
        this.turnOffTheMusic('goodLuck');
        this.animRefillStake({bet: this.currentStakeValue, action: 'undo', isStake: false});
    }

    buttonSettings(x, y, name, scaleX = 1, scaleY = 1) {
        const self = this;
        const button = this.add.sprite(x, y, name)
            .setOrigin(0)
            .setScale(scaleX, scaleY)
            .setInteractive({cursor: 'pointer'});

        button.setFrame(name === 'musicBtn' ? (self.musics.isOn) ? 1 : 5 : 1);

        button.on('pointerdown', function (pointer) {
            if (pointer.leftButtonDown()) {
                switch (name) {
                    case 'windowBtn':
                        this.setFrame((!self.fullScreen) ? 2 : 6);
                        break;
                    case 'musicBtn':
                        this.setFrame((self.musics.isOn) ? 2 : 6);
                        self.musics.isOn = !self.musics.isOn;
                        self.turnOffTheMusic();
                        localStorage.setItem('musicOn', self.musics.isOn);
                        break;
                    default:
                        this.setFrame(2);
                }
            }
        });

        button.on('pointerover', function () {
            switch (name) {
                case 'windowBtn':
                    this.setFrame((!self.fullScreen) ? 3 : 7);
                    break;
                case 'musicBtn':
                    this.setFrame((self.musics.isOn) ? 3 : 7);
                    break;
                default:
                    this.setFrame(3)
            }
        });

        button.on('pointerout', function () {
            switch (name) {
                case 'windowBtn':
                    this.setFrame((!self.fullScreen) ? 1 : 5);
                    break;
                case 'musicBtn':
                    this.setFrame((self.musics.isOn) ? 1 : 5);
                    break;
                default:
                    this.setFrame(1);
            }
        });

        button.on('pointerup', function (pointer) {
            if (pointer.leftButtonReleased()) {
                switch (name) {
                    case 'windowBtn':
                        self.fullScreen = !self.fullScreen;

                        if (self.fullScreen) {
                            this.setFrame(5);
                            self.scale.startFullscreen();
                            self.scale.displaySize.maxHeight = document.documentElement.clientHeight;
                            self.scale.displaySize.maxWidth = document.documentElement.clientWidth;

                        } else {
                            this.setFrame(1);
                            self.scale.stopFullscreen();
                            self.scale.displaySize.maxHeight = 760;
                            self.scale.displaySize.maxWidth = 1340;
                        }

                        break;
                    case 'musicBtn':
                        this.setFrame((self.musics.isOn) ? 1 : 5);
                        break;
                    case 'rebetBtn':
                        game2.bindRepeat();
                        break;
                    case 'clearAllBtn':
                        game2.bindClear();
                        this.setFrame(1);
                        break;
                    case 'undoBttn':
                        game2.bindUndo();
                        this.setFrame(1);
                        break;
                    case 'quickspinBtn':
                        self.startSpin(0, 1800, true);
                        this.setFrame(0);
                        break;
                    case 'spinBtn':
                        self.startSpin(4000, 700, false);
                        this.setFrame(0);
                        break;
                    case 'openHistoryBtn':
                        game2.bindShowStatistic();
                        break;
                    default:
                        this.setFrame(1);
                }
            }
        });

        return button;
    }
}
