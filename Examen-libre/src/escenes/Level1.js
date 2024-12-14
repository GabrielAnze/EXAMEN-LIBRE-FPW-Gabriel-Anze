import Phaser from 'phaser';

class Level1 extends Phaser.Scene {
  constructor() {
    super('Level1');
  }

  init(data) {
    this.playerName = data.playerName; // Nombre del jugador
    this.selectedTank = data.selectedTank; // Tanque seleccionado
  }

  preload() {
    // Cargar el tanque seleccionado
    this.load.image(this.selectedTank, `path/to/${this.selectedTank}.png`);
  }

  create() {
    // Mostrar el nombre del jugador
    this.add.text(20, 20, `Jugador: ${this.playerName}`, {
      font: '20px Arial',
      color: '#ffffff',
    });

    // Crear el tanque con el sprite seleccionado
    this.tank = this.physics.add.sprite(100, 300, this.selectedTank);
    this.tank.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Movimiento del tanque
    if (this.cursors.left.isDown) {
      this.tank.setVelocityX(-200);
      this.tank.setFlipX(true);
    } else if (this.cursors.right.isDown) {
      this.tank.setVelocityX(200);
      this.tank.setFlipX(false);
    } else {
      this.tank.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.tank.body.blocked.down) {
      this.tank.setVelocityY(-300);
    }
  }
}

export default Level1;
