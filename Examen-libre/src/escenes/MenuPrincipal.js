export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
      super('MenuPrincipal');
  }

  preload() {
      this.load.image('background', 'public\images\plataforma.png');
      this.load.image('tank1', 'public\images\tanque1.png');
      this.load.image('tank2', 'public\images\tanque2.png');
      this.load.image('tank3', 'public\images\tanque3.png');
  }

  create() {
      this.add.image(400, 300, 'background');

      const titleText = this.add.text(400, 100, 'Tank Battle', { fontSize: '64px', fill: '#fff' });
      titleText.setOrigin(0.5);

      const nameInput = this.add.dom(400, 200, 'input', {
          type: 'text',
          placeholder: 'Enter your name',
          style: 'width: 200px; padding: 10px;'
      });

      const tank1 = this.add.image(200, 400, 'tank1').setInteractive().setScale(0.5);
      const tank2 = this.add.image(400, 400, 'tank2').setInteractive().setScale(0.5);
      const tank3 = this.add.image(600, 400, 'tank3').setInteractive().setScale(0.5);

      [tank1, tank2, tank3].forEach((tank, index) => {
          tank.on('pointerdown', () => {
              const playerName = nameInput.node.value;
              if (playerName) {
                  this.scene.start('NivelUno', { playerName, tankType: index + 1 });
              } else {
                  alert('Please enter your name');
              }
          });
      });
  }
}

