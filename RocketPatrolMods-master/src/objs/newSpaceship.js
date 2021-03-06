class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing scene, displayList, updateList
        this.points = pointValue;   // store pointValue

    }

    update() {

        // move spaceship left
        this.x -= 7;
        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.x=game.config.width;
        }

    }
    reset(){
        this.x = game.config.width;
    }
  

}