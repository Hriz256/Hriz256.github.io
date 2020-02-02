class MainWindow extends Phaser.Scene {

    constructor() {
        super('MainWindow');
    }

    preload() {
        this.load.image('bg', ['assets/firstWindow/bg.png', 'assets/firstWindow/bg_n.png']);
        this.load.image('play', 'assets/firstWindow/playTheMinigame.png');
        this.load.image('meet', 'assets/firstWindow/meetTheCharacters.png');
        this.load.image('find', 'assets/firstWindow/findOutMore.png');
        this.load.image('tint', 'assets/firstWindow/tint.png');
        this.load.image('text1', 'assets/firstWindow/text1.png');
        this.load.image('text2', 'assets/firstWindow/text2.png');
        this.load.image('logo', 'assets/firstWindow/logo.png');
        this.load.image('lamp', 'assets/firstWindow/lamp.png')
    }

    create() {
        this.scene.launch('Settings');
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0).setPipeline('Light2D');
        this.tint = this.add.image(350, 0, 'tint').setOrigin(0).setInteractive({cursor: 'pointer'}).setDepth(50).setAlpha(0);
        this.logo = this.add.image(385, 35, 'logo').setOrigin(0).setAlpha(0);
        this.text2 = this.add.image(470, 175, 'text2').setOrigin(0).setAlpha(0);
        this.text1 = this.add.image(415, 200, 'text1').setOrigin(0).setAlpha(0);

        const lamp = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(30, 0, 'lamp').setOrigin(0).setScale(0.2),
            name: 'lamp'
        });

        this.createButtons();
        this.createLight();
    }

    createLight() {
        this.lights.enable().setAmbientColor(0x444444);
        const light = this.lights.addLight(0, 0, 100).setColor(0xffffff).setIntensity(1);

        this.input.on('pointermove', function (pointer) {
            light.x = pointer.x;
            light.y = pointer.y;
        });
    }

    createButtons() {
        const playBtn = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(800, 230, 'play').setOrigin(0).setDepth(100),
            name: 'play'
        });
        const meetBtn = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(800, 295, 'meet').setOrigin(0).setDepth(100),
            name: 'meet'
        });
        const findBtn = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(800, 365, 'find').setOrigin(0).setDepth(100),
            name: 'find'
        });

        this.moveAnim([playBtn, meetBtn, findBtn]);
    }

    moveAnim(array) {
        const self = this;

        game.scene.keys['Settings'].moveAnim({
            targets: array,
            duration: 400,
            x: 350,
            delay: 400,
            callback: function(targets) {
                targets.forEach(i => game.scene.keys['Settings'].buttonSettings({
                    link: self,
                    target: i
                }));

                setTimeout(() => {
                    game.scene.keys['Settings'].alphaAnim({
                        target: self.logo, duration: 800
                    });
                }, 400);

                setTimeout(() => {
                    game.scene.keys['Settings'].alphaAnim({
                        target: [self.text1, self.text2], duration: 800
                    });
                }, 1200);
            }
        });
    }
}

const gameWidth = 800;

const config = {
    type: Phaser.WEBGL,
    parent: 'lion',
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
        width: gameWidth,
        height: 450
    },
    audio: {
        disableWebAudio: false
    },
    scene: [MainWindow, MeetTheCharacters, Settings]
};

const game = new Phaser.Game(config);
