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
                game.scene.keys['MainWindow'].tint.y = this.y;
                game.scene.keys['MainWindow'].tint.x = this.x;
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

                    posters.dynamicArray.forEach((i, index) => {
                        if (index !== 0) {
                            i.x = (585 + (-gameWidth * posters.dynamicArray.length)) + gameWidth * index;
                            allow = true;
                        }
                    })
                }

                if (allow) {
                    game.scene.keys['secondWindow'].hideAllElems(false);
                    clearInterval(self.timeout);

                    self.moveAnim({
                        targets: posters,
                        x: `+=${gameWidth}`,
                        duration: 500,
                        startCallback: function () {
                            game.scene.keys['secondWindow'].textVisibility(true);
                            game.scene.keys['secondWindow'].staticElemsVisibility(true);
                        },
                        callback: function (targets) {
                            if (targets.currentPoster === targets.dynamicArray.length - 1) {
                                targets.dynamicArray[0].x = 585 -gameWidth * (posters.dynamicArray.length - 1);
                            }

                            self.allowMove = true;
                            self.timeout = setTimeout(() => {
                                game.scene.keys['secondWindow'].showAllElems(true);
                            }, 150);
                        }
                    });

                    posters.currentPoster > 0 ? posters.currentPoster-- : posters.currentPoster = posters.dynamicArray.length - 1
                }
            }

            if (name === 'rightArrow' && self.allowMove) {
                const posters = game.scene.keys['secondWindow'].posters;
                let allow = true;
                self.allowMove = false;

                if (posters.currentPoster === posters.dynamicArray.length - 1) {
                    allow = false;

                    posters.dynamicArray.forEach((i, index) => {
                        if (index !== posters.dynamicArray.length - 1) {
                            i.x = 585 + gameWidth * (index + 1);
                            allow = true;
                        }
                    })
                }

                if (allow) {
                    game.scene.keys['secondWindow'].hideAllElems(false);
                    clearInterval(self.timeout);

                    self.moveAnim({
                        targets: posters,
                        x: `-=${gameWidth}`,
                        duration: 500,
                        startCallback: function () {
                            game.scene.keys['secondWindow'].textVisibility(true);
                            game.scene.keys['secondWindow'].staticElemsVisibility(true);
                        },
                        callback: function (targets) {
                            if (targets.currentPoster === 0) {
                                targets.dynamicArray[targets.dynamicArray.length - 1].x = 585 + (gameWidth * (targets.dynamicArray.length - 1));
                            }

                            self.allowMove = true;
                            self.timeout = setTimeout(() => {
                                game.scene.keys['secondWindow'].showAllElems(true);
                            }, 150);
                        }
                    });

                    posters.currentPoster < posters.dynamicArray.length - 1 ? posters.currentPoster++ : posters.currentPoster = 0;
                }
            }

            if (name === 'goBack') {
                game.scene.keys['secondWindow'].hideAllElems();
                game.scene.keys['secondWindow'].textVisibility(false);
                game.scene.keys['MainWindow'].showDisplay({afterSecondWindow: true});
            }

            if (name === 'meet') {
                link.hideDisplay();
                game.scene.keys['secondWindow'].textVisibility(true);
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

    alphaAnim({target, duration, alpha = 1, delay = 0, callback = false}) {
        this.tweens.add({
            targets: target,
            alpha: alpha,
            duration: duration,
            ease: 'Sine.easeInOut',
            delay: delay,
            onComplete() {
                callback && callback()
            }
        });
    }

    moveAnim({targets, duration, x, callback = false, delay = 0, startCallback = false}) {
        this.tweens.add({
            targets: targets.dynamicArray ? targets.dynamicArray : targets,
            x: x,
            duration: duration,
            ease: 'Sine.easeInOut',
            delay: function (target, targetKey, value, targetIndex) {
                return targetIndex * delay;
            },
            onUpdate() {
                startCallback && startCallback()
            },
            onComplete() {
                callback && callback(targets)
            }
        });
    }
}