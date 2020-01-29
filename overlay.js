class Overlay extends Phaser.Scene {
    constructor() {
        super('Overlay');

        this.width = 0;
    }

    create() {
        const [width, height] = [this.cameras.main.width, this.cameras.main.height];

        const progressBorder = this.add.graphics().setDepth(100)
            .lineStyle(2, 0x464646, 1)
            .strokeRect(width / 2 - 300, height / 2 + 200, width / 2 - 100, 10);
        const bgProgress = this.add.graphics({fillStyle: {color: 0x00000}})
            .fillRect(0, 0, width, height);
        this.progressBox = this.add.graphics({fillStyle: {color: 0xdbdbdb}});

        this.overlay = this.add.container(0, 0, [bgProgress, progressBorder, this.progressBox]);
    }

    update() {
        this.width + 5 <= this.cameras.main.width / 2 - 100 ? this.width += 0.9 : this.scene.remove();

        this.progressBox.fillRect(
            this.cameras.main.width / 2 - 298,
            this.cameras.main.height / 2 + 203,
            this.width,
            5
        );
    }
}