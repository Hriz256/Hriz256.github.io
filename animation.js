class Animation extends Phaser.Scene {
    constructor() {
        super('Animation');
    }

    winningInd({x0, x, y0, y, target}) {
        this.tween = this.tweens.add({
            targets: target,
            x: x0 + x,
            y: y0 + y,
            duration: 200,
            yoyo: true,
            onYoyo() {
                this.pause()
            },
            onComplete() {
                game.scene.keys['Menu'].showTitle(game.scene.keys['Menu'].placeYourBetsContainer);
                game.scene.keys['WorldGame'].restartGame();
            }
        });
    }

    alpha({target, duration, alpha, callback}) {
        this.tweens.add({
            targets: target,
            alpha: alpha,
            ease: 'linear',
            duration: duration,
            onComplete() {
                callback()
            }
        });
    }

    scales({target, duration, scale = 1, callback = false}){
        const self = this;
        this.tweens.add({
            targets: target,
            scale: scale,
            ease: 'linear',
            duration: duration,
            onComplete() {
                callback && callback(self);
            }
        });
    }

    move({target, duration, x = false, hold, y = false, yoyo = false}) {
        this.tweens.add({
            targets: target,
            x: x && x,
            y: y && y,
            yoyo: yoyo,
            hold: hold,
            duration: duration
        });
    }
}