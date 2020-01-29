class Deposit extends Phaser.Scene {
    constructor() {
        super('Deposit');
    }

    preload() {
        this.load.image('depositPopup', 'images/deposit-popup.png');
        this.load.image('depositField', 'images/deposit-field.png');
        this.load.image('slider', 'images/slider.png');
        this.load.image('errorBg', 'images/errorBg.webp');
        this.load.image('progressSlider', 'images/progress-slider.png');
        this.load.spritesheet('depositButton', 'images/blank-blue.png', {
            frameWidth: 303,
            frameHeight: 113,
            endFrame: 4
        });
        this.load.spritesheet('payInButton', 'images/blank-green.png', {
            frameWidth: 304,
            frameHeight: 112.5,
            endFrame: 4
        });
        this.load.spritesheet('thumb', 'images/sliderHandlerBtn.png', {
            frameWidth: 176,
            frameHeight: 219,
            endFrame: 4
        });
        this.load.spritesheet('close', 'images/close-popup-deposit.png', {
            frameWidth: 141,
            frameHeight: 115,
            endFrame: 4
        });
    }

    create() {
        setAll();
        this.createShadow();

        this.progressSlider = this.add.image(0, 0, 'progressSlider').setScale(1.1).setInteractive({cursor: 'pointer'});
        this.progressSlider.setCrop(0, 0, 120, 100);

        const depositBackground = this.add.image(0, 0, 'depositPopup').setScale(0.62, 0.58);
        const depositField = this.add.image(0, -110, 'depositField').setScale(0.7);
        this.createText(this.format(this.currentValueFloor * 0.04));

        const slider = this.add.image(0, 0, 'slider').setScale(1.1).setInteractive({cursor: 'pointer'});

        const depositButton = this.buttonSettings(0, 0, 'depositButton', 0.7, 0.7, 'depositButton');
        const textDeposit = this.add.text(60, 22, 'Deposit', {font: "26px fusion", fill: "#fff"}).setStroke('#000', 5);
        const depositButtonContainer = this.add.container(-246, 70, [depositButton, textDeposit]);

        const payInButton = this.buttonSettings(0, 0, 'payInButton', 0.7, 0.7, 'payInButton');
        const textPayIn = this.add.text(70, 22, 'Pay In', {font: "26px fusion", fill: "#fff"}).setStroke('#000', 5);
        const PayInContainer = this.add.container(36, 70, [payInButton, textPayIn]);

        const thumb = this.buttonSettings(-60, -80, 'thumb', 0.7, 0.7, 'thumb');
        const closeBtn = this.buttonSettings(212, -178, 'close', 0.7, 0.7, 'close');
        this.depositContainer = this.add.container(0, 0, [depositBackground, depositField, slider,
            this.progressSlider, thumb, closeBtn, depositButtonContainer, PayInContainer]);

        Phaser.Display.Align.In.Center(this.depositContainer, this.add.zone(670, 380, 1340, 760));
    }

    createShadow() {
        const [width, height] = [this.cameras.main.width, this.cameras.main.height];
        this.background = this.add.graphics({fillStyle: {color: 0x00000}})
            .fillRect(0, 0, width, height).setAlpha(0.4);
    }

    createNoticeReconnect(error = 'Reconnecting') {
        const graphics = this.add.graphics().fillStyle(0xffffff, 1).setAlpha(0.5);
        const rect = graphics.fillRoundedRect(0, 0, 620, 40, 20);
        const text = this.add.text(310, 20, `${error}`, {font: "22px Arial", fill: "#000"}).setOrigin(0.5);

        return this.add.container(350, 560, [rect, text]);
    }

    createReconnectPopup() {
        if (this.depositContainer) {
            this.depositContainer.destroy();
            this.valueText.destroy();
        }

        this.createShadow();
        game.scene.stop('Menu');
        game.scene.stop('Field');

        const depositBackground = this.add.image(0, 0, 'depositPopup').setScale(0.54, 0.58);
        const errorBg = this.add.image(0, -50, 'errorBg').setScale(0.7);
        const errorText = this.add.text(-150, -70, 'You have been disconnected due to\ninactivity', {font: "22px fusion", fill: "#fff", align: 'center'});

        const depositButton = this.buttonSettings(0, 0, 'depositButton', 0.7, 0.7, 'leave');
        const textShadow1 = this.add.text(72, 20, 'LEAVE', {font: "21px fusion", fill: "#000"}).setStroke('#000', 5);
        const textDeposit = this.add.text(75, 22, 'LEAVE', {font: "21px fusion", fill: "#fff"}).setStroke('#000', 5);
        const depositButtonContainer = this.add.container(-210, 70, [depositButton, textShadow1, textDeposit]);

        const payInButton = this.buttonSettings(0, 0, 'payInButton', 0.7, 0.7, 'reconnect');
        const textShadow2 = this.add.text(47, 20, 'RECONNECT', {font: "21px fusion", fill: "#000"}).setStroke('#000', 5);
        const textPayIn = this.add.text(50, 22, 'RECONNECT', {font: "21px fusion", fill: "#fff"}).setStroke('#000', 5);
        const PayInContainer = this.add.container(0, 70, [payInButton, textShadow2, textPayIn]);

        this.reconnectContainer = this.add.container(0, 0, [depositBackground, errorBg, errorText, depositButtonContainer, PayInContainer]);

        Phaser.Display.Align.In.Center(this.reconnectContainer, this.add.zone(670, 380, 1340, 760));
    }

    setBalance(balance) {
        this.currentValue = balance;
        this.currentValueFloor = this.calculateFloorValue(this.currentValue);
        this.balance = this.currentValueFloor * 0.04;
    }

    format(number) {
        let string = '';
        `${number}`.split(/(?=(?:\d{3})+(?!\d))/).forEach(i => string += `${i} `);

        return string
    }

    createText(text) {
        this.valueText && this.valueText.destroy();
        this.valueText = this.add.text(670, 270, text, {
            font: "44px fusion",
            fill: "#fff"
        }).setOrigin(0.5).setDepth(200);
    }

    changeAccessibleValue(x, current, maxValue) {
        if (current === maxValue) {
            this.balance = this.currentValue;
        } else if (current === maxValue - 1) {
            this.balance = this.currentValue;
        } else if (current === maxValue - 2) {
            this.balance = this.currentValueFloor;
        } else if (current === maxValue - 3) {
            this.balance = this.currentValueFloor * 0.5;
        } else if (current === maxValue - 4) {
            this.balance = this.currentValueFloor * 0.4;
        } else if (current === maxValue - 5) {
            this.balance = this.currentValueFloor * 0.3;
        } else if (current === maxValue - 6) {
            this.balance = this.currentValueFloor * 0.2;
        } else if (current === maxValue - 7) {
            this.balance = this.currentValueFloor * 0.1;
        } else if (current === maxValue - 8) {
            this.balance = this.currentValueFloor * 0.05;
        } else if (current === maxValue - 9) {
            this.balance = this.currentValueFloor * 0.04;
        } else if (current === maxValue - 10) {
            this.balance = this.currentValueFloor * 0.03;
        } else if (current === maxValue - 11) {
            this.balance = this.currentValueFloor * 0.02;
        } else if (current === maxValue - 12) {
            this.balance = this.currentValueFloor * 0.01;
        } else if (current === maxValue - 13) {
            this.balance = this.currentValueFloor * 0.005;
        } else if (current === maxValue - 14) {
            this.balance = this.currentValueFloor * 0.004;
        } else if (current === maxValue - 15) {
            this.balance = this.currentValueFloor * 0.003;
        } else if (current === maxValue - 16) {
            this.balance = this.currentValueFloor * 0.002;
        } else if (current === maxValue - 17) {
            this.balance = this.currentValueFloor * 0.001;
        }

        this.createText(this.format(this.balance));
    }

    calculateFloorValue(number) {
        const length = `${number}`.length - 1;

        return Math.floor(number / 10 ** length) * 10 ** length;
    }

    buttonSettings(x, y, name, scaleX = 1, scaleY = 1, buttonName) {
        const self = this;
        const button = this.add.image(x, y, name)
            .setOrigin(0)
            .setScale(scaleX, scaleY)
            .setFrame(1)
            .setInteractive((name !== 'thumb') ? {cursor: 'pointer'} : {cursor: 'pointer', draggable: true});

        if (name === 'thumb') {
            button.on('drag', function (pointer, dragX) {
                if (dragX >= -204 && dragX <= 84) {
                    this.x = dragX;
                    self.changeAccessibleValue(this.x, Math.floor(this.x / 16), Math.floor(84 / 16));
                    self.progressSlider.setCrop(0, 0, dragX + 200, 100);
                }
            });
        }

        button.on('pointerdown', function (pointer) {
            if (pointer.leftButtonDown()) {
                this.setFrame(2)
            }
        });

        button.on('pointerup', function (pointer) {
            if (pointer.leftButtonReleased()) {
                this.setFrame(1);

                if (buttonName === 'payInButton') {
                    self.background.destroy();
                    self.depositContainer.destroy();
                    self.valueText.destroy();
                    self.scene.launch('Field');
                    isMobile && game.scene.keys['WorldGame'].zoom();
                    game.scene.keys['Menu'].createElemsAfterDeposit(self.balance);
                } else if (buttonName === 'leave') {
                    game2.showFatalError('showFatalError', 2);
                } else if (buttonName === 'reconnect') {
                    game2.showFatalError('showFatalError', 3);
                    self.reconnectContainer.destroy();
                    self.background.destroy();

                    setTimeout(() => game2.showTipsMSG('Reconnecting'), 500);
                } else if (buttonName === 'close') {
                    game2.showFatalError('showFatalError', 1);
                }
            }
        });

        button.on('pointerover', function () {
            this.setFrame(3)
        });

        button.on('pointerout', function () {
            this.setFrame(1)
        });

        return button;
    }
}