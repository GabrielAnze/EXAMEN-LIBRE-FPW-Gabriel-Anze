import Phaser from 'phaser';

class SeleccionTanque extends Phaser.Scene {
  constructor() {
    super('SeleccionTanque');
  }

  preload() {
    // Cargar imágenes de los tanques
    this.load.image('tank1', 'path/to/tank1.png');
    this.load.image('tank2', 'path/to/tank2.png');
    this.load.image('tank3', 'path/to/tank3.png');
  }

  create() {
    // Texto para ingresar el nombre
    this.add.text(150, 50, 'Escribe tu nombre:', {
      font: '20px Arial',
      color: '#ffffff',
    });

    // Crear el input HTML para el nombre
    const inputElement = this.add.dom(400, 100).createFromHTML(`
      <input type="text" id="playerName" placeholder="Tu nombre" style="padding: 10px; font-size: 16px;" />
    `);

    // Mostrar los tanques para seleccionar
    this.add.text(150, 200, 'Elige tu tanque:', {
      font: '20px Arial',
      color: '#ffffff',
    });

    const tank1 = this.add.image(200, 300, 'tank1').setInteractive();
    const tank2 = this.add.image(400, 300, 'tank2').setInteractive();
    const tank3 = this.add.image(600, 300, 'tank3').setInteractive();

    // Destacar la selección
    let selectedTank = null;
    const tanks = [tank1, tank2, tank3];
    tanks.forEach((tank, index) => {
      tank.on('pointerdown', () => {
        selectedTank = `tank${index + 1}`;
        tanks.forEach((t) => t.clearTint());
        tank.setTint(0x00ff00); // Resaltar el tanque seleccionado
      });
    });

    // Botón para confirmar la selección
    const playButton = this.add.text(350, 400, 'Iniciar Juego', {
      font: '24px Arial',
      backgroundColor: '#000',
      color: '#ffffff',
      padding: 10,
      borderRadius: 5,
    }).setInteractive();

    playButton.on('pointerdown', () => {
      const playerName = document.getElementById('playerName').value;
      if (!playerName || !selectedTank) {
        alert('Por favor ingresa tu nombre y selecciona un tanque.');
        return;
      }
      // Pasar datos a la siguiente escena
      this.scene.start('Level1', { playerName, selectedTank });
    });
  }
}

export default SeleccionTanque;
