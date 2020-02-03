class MeetTheCharacters extends Phaser.Scene {

    constructor() {
        super('secondWindow');

        this.charactersName = ['nala', 'mufasa', 'zazu', 'rafiki', 'scar', 'pumba', 'timon', 'simba'];
        this.posters = {
            currentPoster: 0,
            staticArray: [],
            dynamicArray: []
        };

        this.allowCrop = false;
        this.isVisible = false;
    }


    preload() {
        this.charactersName.forEach(i => {
            this.load.image(`${i}Bg`, `assets/secondWindow/${i}/${i}.png`);
            this.load.image(`${i}Text`, `assets/secondWindow/${i}/${i}Text.png`);
            this.load.image(`${i}Description`, `assets/secondWindow/${i}/${i}Description.png`);
        });

        this.load.image('leftArrow', `assets/secondWindow/common/leftArrow.png`);
        this.load.image('rightArrow', `assets/secondWindow/common/rightArrow.png`);
        this.load.image('goBack', `assets/secondWindow/common/goBack.png`);
        this.load.image('findOutMore', `assets/secondWindow/common/findOutMore.png`);
        this.load.image('goBackTint', `assets/secondWindow/common/goBackTint.png`);
        this.load.image('findOutMoreTint', `assets/secondWindow/common/findOutMoreTint.png`);
    }

    create() {
        this.posters.staticArray = this.charactersName.map((i, index) => {
            const bg = this.add.image(0, 0, `${i}Bg`).setOrigin(0).setAlpha(index === 0 ? 1 : 0);
            const text = this.add.image(450, 50, `${i}Text`).setOrigin(0).setAlpha(index === 0 ? 1 : 0).setDepth(50);
            const cropText = this.add.image(450, 50, `${i}Text`).setOrigin(0).setTint(0xfdb914).setCrop(0, 0, 0, 0).setAlpha(index === 0 ? 1 : 0).setDepth(100);

            return [bg, text, cropText];
        });

        this.posters.dynamicArray = this.charactersName.map((i, index) => {
            return this.add.image(585 + (gameWidth * index), 240, `${i}Description`)
                .setOrigin(0.5)
                .setDepth(50);
        });

        game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(410, 235, 'leftArrow').setOrigin(0.5),
            name: 'leftArrow'
        });
        game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(755, 235, 'rightArrow').setOrigin(0.5),
            name: 'rightArrow'
        });
        this.goBackTint = this.add.image(0, 0, 'goBackTint').setOrigin(0).setInteractive({cursor: 'pointer'}).setDepth(50).setAlpha(0);
        this.findOutMoreTint = this.add.image(0, 0, 'findOutMoreTint').setOrigin(0).setInteractive({cursor: 'pointer'}).setDepth(50).setAlpha(0);

        this.goBack = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(0, 360, 'goBack').setOrigin(0).setDepth(100),
            name: 'goBack'
        });
        this.goBack.x = -this.goBack.width;

        this.findOutMore = game.scene.keys['Settings'].buttonSettings({
            link: this,
            target: this.add.image(385, 360, 'findOutMore').setOrigin(0).setDepth(100),
            name: 'findOutMore'
        });
        this.findOutMore.x += this.findOutMore.width;
    }

    update() {
        this.allowCrop && this.isVisible && this.cropAnim();
    }

    showAllElems() {
        this.movePanels(true);
        this.isVisible = true;
        this.doAllowCrop();
        // this.textVisibility(true);
    }

    hideAllElems() {
        this.movePanels(false);
        this.isVisible = false;
        this.deleteCrop();
        this.textVisibility(false);
    }

    doAllowCrop() {
        setTimeout(() => this.allowCrop = true, 1000);
    }

    cropAnim() {
        const cropText = this.posters.staticArray[this.posters.currentPoster].filter(i => i.isCropped)[0];

        if (cropText._crop.cw >= cropText.width) cropText.deleteCrop = true;

        cropText.deleteCrop ?
            cropText.setCrop(cropText._crop.cx += 3, 0, cropText._crop.cw, cropText.height) :
            cropText.setCrop(cropText._crop.cx, 0, cropText._crop.cw += 3, cropText.height);
    }

    deleteCrop() {
        const cropText = this.posters.staticArray[this.posters.currentPoster].filter(i => i.isCropped)[0].setCrop(0, 0, 0, 0);

        cropText.deleteCrop = false;
        this.allowCrop = false;
    }

    textVisibility(show) {
        const text = this.posters.dynamicArray[this.posters.currentPoster];

        game.scene.keys['Settings'].alphaAnim({
            target: text,
            duration: show ? 200 : 300,
            alpha: show ? 1 : 0,
        });
    }

    staticElemsVisibility() {
        this.posters.staticArray.forEach(array => {
            game.scene.keys['Settings'].alphaAnim({
                target: array,
                duration: 90,
                alpha: 0,
            });
        });

        const array = this.posters.staticArray[this.posters.currentPoster];

        game.scene.keys['Settings'].alphaAnim({
            target: array,
            duration: 300,
            alpha: 1,
        });
    }

    movePanels(show) {
        game.scene.keys['Settings'].moveAnim({
            targets: this.goBack,
            duration: 200,
            x: show ? 0 : -this.goBack.width
        });

        game.scene.keys['Settings'].moveAnim({
            targets: this.findOutMore,
            duration: 200,
            x: show ? gameWidth - this.findOutMore.width : gameWidth
        });
    }
}