export default class Tanque extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setBounce(0.2);
        this.setDrag(500);
        this.setMaxVelocity(300);

        this.health = 3;
        this.canShoot = true;
        this.shootDelay = 500;
    }

    moveForward() {
        this.setAccelerationX(300);
    }

    moveBackward() {
        this.setAccelerationX(-300);
    }

    stop() {
        this.setAccelerationX(0);
    }

    jump() {
        if (this.body.touching.down) {
            this.setVelocityY(-400);
        }
    }

    shoot() {
        if (this.canShoot) {
            // Lógica de disparo aquí
            this.canShoot = false;
            this.scene.time.delayedCall(this.shootDelay, () => {
                this.canShoot = true;
            });
        }
    }

    damage() {
        this.health--;
        if (this.health <= 0) {
            this.scene.events.emit('gameOver');
        }
    }
}

