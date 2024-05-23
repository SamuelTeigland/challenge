class Person extends GameObject {
    constructor(config) {
        super(config);

        this.isPlayerControlled = config.isPlayerControlled || false;
    }
}