class Settings extends Phaser.Scene {

    constructor() {
        super('Settings');

        this.allowMove = true;
        this.timeout = null;
    }

    buttonSettings({link, target, name}) {
        const self = this;
        target.setInteractive({cursor: 'pointer'});

        target.on('pointerover', function () {
            if (name === 'leftArrow' || name === 'rightArrow') {
                self.scaleAnim({
                    target: this,
                    duration: 300,
                    scale: 1.1
                })
            } else if (name === 'play' || name === 'meet' || name === 'find') {
                game.scene.keys['MainWindow'].tint.setAlpha(1);
                game.scene.keys['MainWindow'].tint.y = this.y
            } else if (name === 'goBack') {
                game.scene.keys['secondWindow'].goBackTint.setAlpha(1);
                game.scene.keys['secondWindow'].goBackTint.y = this.y;
                game.scene.keys['secondWindow'].goBackTint.x = this.x;
            } else if (name === 'findOutMore') {
                game.scene.keys['secondWindow'].findOutMoreTint.setAlpha(1);
                game.scene.keys['secondWindow'].findOutMoreTint.y = this.y;
                game.scene.keys['secondWindow'].findOutMoreTint.x = this.x;
            }
        });

        target.on('pointerout', function () {
            if (name === 'leftArrow' || name === 'rightArrow') {
                self.scaleAnim({
                    target: this,
                    duration: 300,
                    scale: 0.9
                })
            } else if (name === 'play' || name === 'meet' || name === 'find') {
                game.scene.keys['MainWindow'].tint.setAlpha(0);
            } else if (name === 'goBack') {
                game.scene.keys['secondWindow'].goBackTint.setAlpha(0);
            } else if (name === 'findOutMore') {
                game.scene.keys['secondWindow'].findOutMoreTint.setAlpha(0);
            }
        });

        target.on('pointerdown', function () {
            if (name === 'leftArrow' && self.allowMove) {
                const posters = game.scene.keys['secondWindow'].posters;
                let allow = true;
                self.allowMove = false;

                if (posters.currentPoster === 0) {
                    allow = false;

                    posters.array.forEach((i, index) => {
                        if (index !== 0) {
                            i.x = -gameWidth * posters.array.length + gameWidth * index;
                            allow = true;
                        }
                    })
                }

                if (allow) {
                    game.scene.keys['secondWindow'].movePanels(false);
                    game.scene.keys['secondWindow'].deleteCrop();
                    clearInterval(self.timeout);

                    self.moveAnim({
                        targets: posters,
                        x: `+=800`,
                        duration: 500,
                        callback: function (targets) {
                            if (targets.currentPoster === targets.array.length - 1) {
                                targets.array[0].x = -gameWidth * (posters.array.length - 1);
                            }

                            self.allowMove = true;
                            self.timeout = setTimeout(() => {
                                game.scene.keys['secondWindow'].movePanels(true);
                                game.scene.keys['secondWindow'].doAllowCrop();
                            }, 150);
                        }
                    });

                    posters.currentPoster > 0 ? posters.currentPoster-- : posters.currentPoster = posters.array.length - 1
                }
            }

            if (name === 'rightArrow' && self.allowMove) {
                const posters = game.scene.keys['secondWindow'].posters;
                let allow = true;
                self.allowMove = false;

                if (posters.currentPoster === posters.array.length - 1) {
                    allow = false;

                    posters.array.forEach((i, index) => {
                        if (index !== posters.array.length - 1) {
                            i.x = gameWidth * (index + 1);
                            allow = true;
                        }
                    })
                }

                if (allow) {
                    game.scene.keys['secondWindow'].movePanels(false);
                    game.scene.keys['secondWindow'].deleteCrop();
                    clearInterval(self.timeout);

                    self.moveAnim({
                        targets: posters,
                        x: `-=800`,
                        duration: 500,
                        callback: function (targets) {
                            if (targets.currentPoster === 0) {
                                targets.array[targets.array.length - 1].x = gameWidth * (targets.array.length - 1);
                            }

                            self.allowMove = true;
                            self.timeout = setTimeout(() => {
                                game.scene.keys['secondWindow'].movePanels(true);
                                game.scene.keys['secondWindow'].doAllowCrop();
                            }, 150);
                        }
                    });

                    posters.currentPoster < posters.array.length - 1 ? posters.currentPoster++ : posters.currentPoster = 0;
                }
            }

            if (name === 'goBack') {
                link.scene.moveDown();
                game.scene.keys['secondWindow'].isVisible = false;
            }

            if (name === 'meet') {
                link.scene.moveDown();
                game.scene.keys['secondWindow'].isVisible = true;
                game.scene.keys['secondWindow'].doAllowCrop();
            }

            if (name === 'lamp') {
                if (link.bg.getPipelineName() === 'Light2D') {
                    link.lights.disable();
                    link.bg.resetPipeline();
                } else {
                    link.lights.enable();
                    link.bg.setPipeline('Light2D');
                }
            }
        });

        return target;
    }

    scaleAnim({target, duration, scale}) {
        this.tweens.add({
            targets: target,
            scale: scale,
            duration: duration,
            ease: 'Sine.easeInOut',
        });
    }

    alphaAnim({target, duration}) {
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: duration,
            ease: 'Sine.easeInOut',
        });
    }

    moveAnim({targets, duration, x, callback = false, delay = 0}) {
        this.tweens.add({
            targets: targets.array ? targets.array : targets,
            x: x,
            duration: duration,
            ease: 'Sine.easeInOut',
            delay: function (target, targetKey, value, targetIndex) {
                return targetIndex * delay;
            },
            onComplete() {
                callback && callback(targets)
            }
        });
    }
}