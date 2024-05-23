class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // draw lower layer here
            this.map.drawLowerImage(this.ctx);

            // draw our game objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx);
            })

            // draw the upper layer

            requestAnimationFrame(step);
        }
        step()
    }

    init() {
        this.map = new Map(window.Maps.MainHouse);

        this.startGameLoop();
    }
}