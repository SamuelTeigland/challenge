class Sprite {
    constructor(config) {
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        this.isLoaded = false;

        // Add the shadow eventually

        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.isLoaded && ctx.drawImage(
            this.image,
            32, 32,
            32, 32,
            x, y,
            32, 32
        )
    }
}