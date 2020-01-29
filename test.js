const roulette = document.getElementById('roulette');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let count = 35;

let idleTime = 0;

const timerIncrement = () => {
    idleTime = idleTime + 1;

    if (idleTime === 10) {
        game.scene.keys['Deposit'].createReconnectPopup();
        clearInterval(idleInterval);
    }
};

const idleInterval = setInterval(timerIncrement, 60000); // 1 minute

document.body.addEventListener('mousemove', () => {
    idleTime = 0;
});

document.body.addEventListener('mousedown', () => {
    idleTime = 0;
});

document.body.addEventListener('keypress', () => {
    idleTime = 0;
});

document.body.addEventListener('touchstart', () => {
    idleTime = 0;
});

const number = (number) => {
    switch (number) {
        case 28:
            return 0;
        case 12:
            return 1;
        case 35:
            return 2;
        case 3:
            return 3;
        case 26:
            return 4;
        case 0:
            return 5;
        case 32:
            return 6;
        case 15:
            return 7;
        case 19:
            return 8;
        case 4:
            return 9;
        case 21:
            return 10;
        case 2:
            return 11;
        case 25:
            return 12;
        case 17:
            return 13;
        case 34:
            return 14;
        case 6:
            return 15;
        case 27:
            return 16;
        case 13:
            return 17;
        case 36:
            return 18;
        case 11:
            return 19;
        case 30:
            return 20;
        case 8:
            return 21;
        case 23:
            return 22;
        case 10:
            return 23;
        case 5:
            return 24;
        case 24:
            return 25;
        case 16:
            return 26;
        case 33:
            return 27;
        case 1:
            return 28;
        case 20:
            return 29;
        case 14:
            return 30;
        case 31:
            return 31;
        case 9:
            return 32;
        case 22:
            return 33;
        case 18:
            return 34;
        case 29:
            return 35;
        case 7:
            return 36;
    }
};

const random = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

let runByButton;
let letsgo = false;
let start = false;
let ph = false;
let counter = false;
let startTimeout = false;
let isSecondGame = false;
let isFirstOption = true;
let banner;

class rouletteGame extends Phaser.Scene {
    constructor() {
        super('WorldGame');

        this.ellipse = {
            forBall: {
                ball: null,
                circle: new Phaser.Curves.Ellipse(250, 225, 140, 185).setRotation(1.4),
            },
            forCells: {
                circle: new Phaser.Curves.Ellipse(255, 233, 87, 112).setRotation(1.4),
                followers: null,
                hideTheBall: false
            },
            forCellsForArc1: {
                circle: new Phaser.Curves.Ellipse(255, 233, 60, 80).setRotation(1.4),
                followers: null,
            },
            forCellsForArc2: {
                circle: new Phaser.Curves.Ellipse(255, 230, 105, 134).setRotation(1.4),
                followers: null,
            },
            graphics: null
        };

        this.boundsCoords = {
            x: 0,
            y: 0,
            width: 30,
            height: 30,
            velocity: {
                x: 60,
                y: 90
            },
            bounce: 1
        };

        this.rectsArray = [
            new Phaser.Geom.Rectangle(60, 60, 140, 120),
            new Phaser.Geom.Rectangle(200, 60, 140, 120),
            new Phaser.Geom.Rectangle(340, 60, 140, 120),
            new Phaser.Geom.Rectangle(60, 180, 140, 120),
            new Phaser.Geom.Rectangle(340, 180, 140, 120),
            new Phaser.Geom.Rectangle(60, 300, 140, 120),
            new Phaser.Geom.Rectangle(200, 300, 140, 120),
            new Phaser.Geom.Rectangle(340, 300, 140, 120),
            new Phaser.Geom.Rectangle(200, 180, 140, 120),
        ];

        this.isStartGame = false;
        this.blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        this.redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.greenNumbers = 0;
        this.isZoom = false;
        this.moveDown = true;
    }

    changeRouletteSpin() {
        const rouletteSpin = this.add.sprite(108, 110, 'rouletteSpin', 'Num_Spin_00359.png.webp').setScale(0.7);
        const rouletteSpinFrames = this.anims.generateFrameNames('rouletteSpin', {
            start: 358, end: 0, zeroPad: 5,
            prefix: 'Num_Spin_', suffix: '.png.webp'
        });

        this.anims.create({key: 'rouletteSpin', frames: rouletteSpinFrames, frameRate: 29, repeat: -1});
        rouletteSpin.anims.play('rouletteSpin');
    }

    changeRouletteLever() {
        const rouletteLever = this.add.sprite(200, 150, 'rouletteLever', 'ColumnSpin_00089.png.webp').setScale(0.7);
        const rouletteLeverFrames = this.anims.generateFrameNames('rouletteLever', {
            start: 88, end: 0, zeroPad: 5,
            prefix: 'ColumnSpin_', suffix: '.png.webp'
        });

        this.anims.create({key: 'rouletteLever', frames: rouletteLeverFrames, frameRate: 29, repeat: -1});
        rouletteLever.anims.play('rouletteLever');
    }

    preload() {
        const [width, height] = [this.cameras.main.width, this.cameras.main.height];
        const progressBorder = this.add.graphics().setDepth(100)
            .lineStyle(2, 0x464646, 1)
            .strokeRect(width / 2 - 300, height / 2 + 200, width / 2 - 100, 10);
        const bgProgress = this.add.graphics({fillStyle: {color: 0x00001e}})
            .fillRect(0, 0, width, height);
        const progressBox = this.add.graphics({fillStyle: {color: 0x7aa838}});

        this.load.on('progress', function (value) {
            progressBox.clear();
            progressBox.fillRect(width / 2 - 298, height / 2 + 203, (width / 2 - 104) * value, 5);
        });

        this.load.on('complete', function () {
            progressBorder.destroy();
            progressBox.destroy();
            bgProgress.destroy();
        });

        this.load.image('winningIndicator', 'images/winningIndicator.png');
        this.load.image('slider', 'images/slider.png');
        this.load.image('background', 'images/table_en.png.png');
        this.load.image('wheel', 'images/UpperWheel.png.png');
        this.load.image('ball', 'images/ball.png.png');
        this.load.image('blackBanner', 'images/winningNumberBannerBlack.png');
        this.load.image('greenBanner', 'images/winningNumberBannerGreen.png');
        this.load.image('redBanner', 'images/winningNumberBannerRed.png');
        this.load.multiatlas('rouletteSpin', 'images/roulette.json', 'images');
        this.load.multiatlas('rouletteLever', 'images/lever.json', 'images');
        this.load.spritesheet('button-deposit', 'images/button-deposit.png', {frameWidth: 180, frameHeight: 60});
    }

    create() {
        this.scene.launch('Overlay');
        this.cameras.main.setBounds(0, 0, 1340, 760);
        this.add.image(0, -160, 'background').setOrigin(0).setScale(0.7);
        this.add.image(20, 30, 'wheel').setOrigin(0).setScale(0.7).setDepth(500);
        this.winningIndicator = this.add.image(650, 78, 'winningIndicator').setOrigin(0.5).setScale(0.7);
        this.winNumberText = this.add.text(0, 0, ``).setFontSize(70).setFontStyle('bold').setFontFamily('fusion').setDepth(100);
        this.blackBanner = banner = this.add.image(-300, 475, 'blackBanner').setScale(0.6).setDepth(10);
        this.greenBanner = this.add.image(-300, 475, 'greenBanner').setScale(0.6);
        this.redBanner = this.add.image(-300, 475, 'redBanner').setScale(0.6);

        this.changeRouletteSpin(); //Смена спрайтов колеса
        this.changeRouletteLever(); //Смена спрайтов столба

        //Движение шариков, соответствующих своей ячейке

        this.ellipse.forCells.followers = this.add.group();
        this.ellipse.forCellsForArc1.followers = this.add.group();
        this.ellipse.forCellsForArc2.followers = this.add.group();
        this.ballsForArc1 = this.ellipse.forCellsForArc1.followers.getChildren();
        this.ballsForArc2 = this.ellipse.forCellsForArc2.followers.getChildren();
        this.ballsForCells = this.ellipse.forCells.followers.getChildren();

        for (let i = 0; i < 37; i++) {
            const ballForArc1 = this.ellipse.forCellsForArc1.followers.create(-10, -10, 'ball').setScale(0.7);
            const ballForArc2 = this.ellipse.forCellsForArc2.followers.create(-10, -10, 'ball').setScale(0.7);
            const ballForCell = this.ellipse.forCells.followers.create(-10, -10, 'ball').setScale(0.7);
            ballForArc1.setData('vector', new Phaser.Math.Vector2());
            ballForArc2.setData('vector', new Phaser.Math.Vector2());
            ballForCell.setData('vector', new Phaser.Math.Vector2());

            this.tweens.add({
                targets: [ballForArc1, ballForArc2, ballForCell],
                z: -1,
                ease: 'Linear',
                duration: 12380,
                repeat: -1,
                delay: i * 335
            });
        }

        //Эллипс, по которому движется шарик, который должен упасть на ячейку

        this.ellipse.forBall.ball = this.add.follower(this.ellipse.forBall.circle, 0, 0, 'ball').setScale(0.7);
        this.ellipse.forBall.ball.startFollow({
            positionOnPath: true,
            ease: 'Linear',
            duration: 700,
            repeat: -1
        });

        this.graphics = this.add.graphics({lineStyle: {width: 2, color: 0x00ff00}, fillStyle: {color: 0xff0000}});
        this.ellipse.graphics = this.add.graphics({lineStyle: {width: 2, color: 0xffffff}});

        this.group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 20,
            immovable: true
        });

        this.createArcadeBall();

        // 2 способ падения шарика (под дуге)

        this.splineGraphics = this.add.graphics({
            lineStyle: {width: 2, color: 0xFF8000},
            fillStyle: {color: 0xFF8000}
        }).setDepth(-1);

        this.arc = new Phaser.Curves.Spline([
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0
        ]);

        this.soundPlay = false;
        this.scene.launch('Animation');
        this.scene.launch('Menu');
    }

    zoom(move = false) {
        const pan = (offsetX, offsetY) => {
            this.cameras.main.pan(offsetX, offsetY, 400, 'Power2');
            game.scene.keys['Field'].cameras.main.pan(offsetX, offsetY, 400, 'Power2');
        };

        const zoomSettings = ({zoomX, offsetX, offsetY, rotation}) => {
            this.cameras.main.zoomTo(zoomX, 400);
            this.cameras.main.rotation = rotation;
            pan(offsetX, offsetY);

            game.scene.keys['Field'].cameras.main.zoomTo(zoomX, 400);
            game.scene.keys['Field'].cameras.main.rotation = rotation;

            setTimeout(() => this.moveDown = !this.moveDown, 400);
        };

        if (!runByButton) {
            if (!move) {
                this.isZoom = !this.isZoom;

                this.isZoom ?
                    zoomSettings({
                        zoomX: 1.65,
                        offsetX: 910,
                        offsetY: 400,
                        rotation: -0.217
                    }) :
                    zoomSettings({
                        zoomX: 1,
                        offsetX: 670,
                        offsetY: 380,
                        rotation: 0
                    })
            } else {
                game.scene.keys['Menu'].buttonMoveRotate(this.moveDown);

                this.moveDown ? zoomSettings({
                        zoomX: 1.65,
                        offsetX: 910,
                        offsetY: 400,
                        rotation: -0.217
                    }) :
                    zoomSettings({
                        zoomX: 2.1,
                        offsetX: 960,
                        offsetY: 200,
                        rotation: -0.217
                    })
            }
        }
    }

    winningIndicatorAnim(name, duration) {
        const cell = game.scene.keys['Field'].mainArrayCell[name];
        const [x0, y0, width, height, x1, y1] = [cell.x, cell.y, cell.width, cell.height, cell.geom.points[1].x, cell.geom.points[3].y];
        const [x, y] = [
            name !== '0' ? width / 2 + x1 : -5,
            name !== '0' ? height / 2 - y1 : 70
        ];

        game.scene.keys['Animation'].winningInd({x0, x, y0, y, target: this.winningIndicator});

        if (game.scene.keys['Menu'].winMoney) {
            game.scene.keys['Menu'].animRefillStake({
                bet: game.scene.keys['Menu'].winMoney,
                action: 'add',
                isWin: true
            });
            game.scene.keys['Menu'].animRefillStake({
                bet: game.scene.keys['Menu'].winMoney,
                action: 'add',
                isStake: false,
                isWin: false
            });
        }

        game.scene.keys['Field'].findCommonWinningCells(`${count}`, duration);
        game.scene.keys['Menu'].changeWinBalls(count);
    }

    showBanner(hold) {
        const animations = (target) => {
            banner = target;

            game.scene.keys['Animation'].move({target, x: 100, hold, duration: 400, yoyo: true});
        };

        if (this.blackNumbers.find(number => number === count)) {
            animations(this.blackBanner)
        } else if (this.redNumbers.find(number => number === count)) {
            animations(this.redBanner)
        } else if (this.greenNumbers === count) {
            animations(this.greenBanner)
        }
    }

    createArcadeBall() {
        this.ball = this.physics.add.image(0, 0, 'ball').setScale(0.7)
            .setAlpha(-1)
            .setVelocity(this.boundsCoords.velocity.x, this.boundsCoords.velocity.y)
            .setBounce(this.boundsCoords.bounce, this.boundsCoords.bounce)
            .setCollideWorldBounds(true)
            .setGravityY(0);
    }

    moveArcadeBall({x, y}) {
        const distance = Phaser.Math.Distance.Between(this.ball.x, this.ball.y, x, y);
        this.physics.moveToObject(this.ball, {x, y}, 70);

        if (distance <= 1) {
            ph = false;
            this.ball.body.reset(x, y);
            this.ball.setAlpha(-1);
            this.ellipse.forCells.followers.children.entries[number(count)].setDepth(10);
            this.ellipse.forCells.hideTheBall = true;
        }
    }

    moveRect({x, y}) {
        const rect = this.boundsCoords;

        rect.x = x - (rect.width / 4);
        rect.y = y - (rect.height / 4);
        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(rect.x - 5, rect.y - 10, rect.width, rect.height));

        this.physics.world.collide(this.ball, this.group);
        this.group.children.entries.forEach(ball => ball.setAlpha(-1));
    }

    drawGraphics({graphics, forBall, forCells}) {
        this.graphics.clear();
        this.rectsArray.forEach(i => this.graphics.strokeRectShape(i));
        this.graphics.setDepth(-1);

        // Шарик, который надо приземлить

        graphics.clear();
        graphics.fillStyle(0xff0000, 1).setDepth(-1);
        forBall.circle.draw(graphics, 64);
        forCells.circle.draw(graphics, 64);

        this.hideBalls(this.ballsForCells, this.ellipse.forCells.circle); // Шарики на ячейках

        if (!this.ellipse.forCells.hideTheBall && isSecondGame) {
            this.ellipse.forCells.followers.children.entries[number(count)].setDepth(10);
        }
    }

    hideBalls(array, circle) {
        array.forEach(ball => {
            const vec = ball.getData('vector');

            circle.getPoint(ball.z, vec);
            ball.setPosition(vec.x, vec.y).setDepth(-1);
        });
    }

    drawGraphicsArc() {
        // 2 способ падения (по дуге)

        this.splineGraphics.clear();

        if (!counter) {
            this.arc.points[0].x = this.ellipse.forBall.ball.x;
            this.arc.points[0].y = this.ellipse.forBall.ball.y;
        }

        if (count === 12) {
            this.arc.points[1].x = this.ballsForArc2[36].x;
            this.arc.points[1].y = this.ballsForArc2[36].y;
        } else if (count === 28) {
            this.arc.points[1].x = this.ballsForArc2[35].x;
            this.arc.points[1].y = this.ballsForArc2[35].y;
        } else {
            this.arc.points[1].x = this.ballsForArc2[number(count) - 2].x;
            this.arc.points[1].y = this.ballsForArc2[number(count) - 2].y;
        }

        this.arc.points[2].x = this.ballsForCells[number(count)].x;
        this.arc.points[2].y = this.ballsForCells[number(count)].y;
        this.arc.points[3].x = this.ballsForArc1[number(count)].x;
        this.arc.points[3].y = this.ballsForArc1[number(count)].y;
        this.arc.points[4].x = this.ballsForArc2[number(count)].x;
        this.arc.points[4].y = this.ballsForArc2[number(count)].y;
        this.arc.points[5].x = this.ballsForArc1[number(count)].x;
        this.arc.points[5].y = this.ballsForArc1[number(count)].y;
        this.arc.points[6].x = this.ballsForArc2[number(count)].x;
        this.arc.points[6].y = this.ballsForArc2[number(count)].y;
        this.arc.points[7].x = this.ballsForCells[number(count)].x;
        this.arc.points[7].y = this.ballsForCells[number(count)].y;

        this.arc.draw(this.splineGraphics, 64);
        this.ellipse.forCellsForArc1.circle.draw(this.splineGraphics, 64);
        this.ellipse.forCellsForArc2.circle.draw(this.splineGraphics, 64);

        this.hideBalls(this.ballsForArc1, this.ellipse.forCellsForArc1.circle);
        this.hideBalls(this.ballsForArc2, this.ellipse.forCellsForArc2.circle);
    }

    decreaseEllipseRadius(ellipse, distance) {
        ellipse.xRadius -= (ellipse.xRadius / distance) * 1.26;
        ellipse.yRadius -= ((ellipse.xRadius / distance) * 1.31) * 1.26;
    }

    rectContains(cell, ball1, ball2, distance) {
        if (this.rectsArray[cell].contains(this.ellipse.forBall.ball.x, this.ellipse.forBall.ball.y) &&
            (this.rectsArray[ball1].contains(this.ballsForCells[number(count)].x, this.ballsForCells[number(count)].y) || this.rectsArray[ball2].contains(this.ballsForCells[number(count)].x, this.ballsForCells[number(count)].y)) &&
            distance > 200 && this.ellipse.forBall.ball.pathTween.data[0].duration >= 2400) {
            letsgo = true;
        }
    }

    fallOnARoulette(ellipseBall, ballOnRoulette) {
        const contains = (distance) => {
            this.rectContains(0, 2, 4, distance);
            this.rectContains(1, 4, 7, distance);
            this.rectContains(2, 6, 7, distance);
            this.rectContains(4, 5, 6, distance);
            this.rectContains(7, 3, 5, distance);
            this.rectContains(6, 0, 3, distance);
            this.rectContains(5, 0, 1, distance);
            this.rectContains(3, 1, 2, distance);
        };

        const shiftEllipse = (ellipse) => {
            if (ellipse.y <= 233) ellipse.y += 0.3;

            if (ellipse.x <= 255) ellipse.x += 0.3;
        };

        const decreaseEllipseRadiusAndSpeed = (ellipse, ball, distance) => {
            if (letsgo && ellipse.xRadius >= 100) {
                // alert(distance)
                this.decreaseEllipseRadius(this.ellipse.forBall.circle, distance);
                shiftEllipse(ellipse);
            }

            if (letsgo && ellipse.xRadius <= 105 && !isFirstOption) {
                counter = true;
                ball.setPath(this.arc);
                ball.pathConfig.duration = this.time;
            }

            if (letsgo && distance >= 25 && distance <= 30) {
                // alert(ellipse.xRadius)
                if (ellipse.xRadius >= 88) {
                    this.decreaseEllipseRadius(this.ellipse.forBall.circle, distance)
                }

                shiftEllipse(ellipse);
            }

            if (letsgo && distance <= 15) {

                if (ellipse.xRadius >= 88) {
                    this.decreaseEllipseRadius(this.ellipse.forBall.circle, distance)
                }

                shiftEllipse(ellipse);
            }

            if (ball.pathTween.data[0].duration < 2700 && !counter && !isFirstOption) {
                this.time = ball.pathTween.data[0].duration += 6;
            }

            if (ball.pathTween.data[0].duration < 2700 && !counter && isFirstOption) {
                ball.pathTween.data[0].duration += 7;
            }
        };

        const checkCollision = (ellipseBall) => {
            if (ellipseBall.x >= ballOnRoulette.x - 5 && ellipseBall.x <= ballOnRoulette.x + 5 && ellipseBall.y >= ballOnRoulette.y - 5 &&
                ellipseBall.y <= ballOnRoulette.y + 5) {

                if (!counter && isFirstOption) {
                    ellipseBall.setAlpha(0);
                    this.ball.setAlpha(1);
                    this.ball.x = ellipseBall.x;
                    this.ball.y = ellipseBall.y;

                    setTimeout(() => {
                        ph = true;
                        start = false;
                    }, 1000);

                    counter = true;
                }
            }
        };

        const a = Math.abs(ballOnRoulette.x - ellipseBall.ball.x);
        const b = Math.abs(ballOnRoulette.y - ellipseBall.ball.y);
        const distance = Math.sqrt(a ** 2 + b ** 2);

        contains(distance);
        decreaseEllipseRadiusAndSpeed(ellipseBall.circle, ellipseBall.ball, distance);
        checkCollision(ellipseBall.ball, ballOnRoulette);
    }

    fallOption(time, duration, winNumber) {
        isMobile && this.zoom();
        this.isStartGame = true;
        count = winNumber;
        this.winNumberText.setText(`${count}`);
        isFirstOption = Math.random() >= 0.4;
        this.ball.destroy();
        this.ellipse.forBall.ball.setAlpha(1);
        this.createArcadeBall();
        this.ellipse.forBall.ball.pathTween.data[0].duration = duration;

        setTimeout(() => {
            runByButton = true;

            setTimeout(() => {
                start = true;
            }, time);
        }, 500)
    }

    restartGame() {
        this.ellipse.forBall.circle = new Phaser.Curves.Ellipse(250, 225, 140, 185).setRotation(1.4);
        this.ellipse.forBall.forCellsForArc1 = new Phaser.Curves.Ellipse(255, 233, 60, 80).setRotation(1.4);
        this.ellipse.forBall.forCellsForArc2 = new Phaser.Curves.Ellipse(255, 230, 105, 134).setRotation(1.4);
        this.ellipse.forBall.ball.pathConfig.duration = 700;
        this.ellipse.forBall.ball.setPath(this.ellipse.forBall.circle);
        this.ellipse.forCells.hideTheBall = false;
        this.soundPlay = false;

        isSecondGame = true;
        runByButton = false;
        letsgo = false;
        start = false;
        ph = false;
        counter = false;
        startTimeout = false;

        isMobile && this.zoom();
    }

    update() {
        this.drawGraphics(this.ellipse);  // Обновляем графику

        !isFirstOption && this.drawGraphicsArc();
        !runByButton ? this.ellipse.forBall.ball.pauseFollow() : this.ellipse.forBall.ball.resumeFollow(); // Включаем анимацию

        // Меняем шарик на тот, который уже лежит

        if (counter && !isFirstOption) {
            if (this.ellipse.forBall.ball.pathTween.data[0].progress >= 0.55) {
                this.ellipse.forCellsForArc1.circle.xRadius = 78;
                this.ellipse.forCellsForArc1.circle.yRadius = 98;
                this.ellipse.forBall.ball.pathTween.data[0].duration += 10;
            } else if (this.ellipse.forBall.ball.pathTween.data[0].progress >= 0.7) {
                this.ellipse.forCellsForArc2.circle.xRadius = 95;
                this.ellipse.forCellsForArc2.circle.yRadius = 120;
            }

            if (this.ellipse.forBall.ball.pathTween.data[0].progress > 0.99) {
                this.ellipse.forBall.ball.setAlpha(0);
                this.ball.setAlpha(1);
                this.ball.x = this.ellipse.forBall.ball.x;
                this.ball.y = this.ellipse.forBall.ball.y;

                ph = true;
                start = false;
            }
        }

        // Двигаем "стенки" ячейки

        this.moveRect(this.ballsForCells[number(count)]);

        // Прячем шарик, который бьётся об стенки и показываем тот, который уже лежит

        if (this.ellipse.forCells.hideTheBall) {
            this.ellipse.forCells.followers.children.entries[number(count)].setDepth(10);

            if (!this.soundPlay) {
                const secondScene = game.scene.keys['Menu'];
                const musicDuration = secondScene.musics[`sound_0${count}`].duration * 1000;

                setTimeout(() => {
                    this.showBanner(musicDuration);
                    this.winningIndicatorAnim(`${count}`, musicDuration);
                    secondScene.turnOffTheMusic(`sound_0${count}`);
                }, 2000);

                this.soundPlay = true;
            }
        }

        // Двигаем шарик, бьющийся об стенки, к шарику, который лежит на ячейке, чтобы убрать резкость подмены

        ph && this.moveArcadeBall(this.ballsForCells[number(count)]);

        if (runByButton) {
            isSecondGame = false;

            if (start && !counter) this.fallOnARoulette(this.ellipse.forBall, this.ballsForCells[number(count)])
        }

        if (!this.isStartGame) this.ellipse.forCells.followers.children.entries[number(count)].setDepth(10);


        Phaser.Display.Align.In.Center(this.winNumberText, banner);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'roulette',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            // debug: true,
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1340,
        height: 760,
        max: {
            width: 1340,
            height: 760
        }
    },
    audio: {
        disableWebAudio: false
    },
    dom: {
        createContainer: true
    },
    scene: [rouletteGame, Menu, Field, Deposit, Animation, Overlay]
};

const game = new Phaser.Game(config);


