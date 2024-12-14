import SeleccionTanque from '../escenes/SeleccionTanque';
import Level1 from '../escenes/Level1';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false,
    },
  },
  scene: [SeleccionTanque, Level1], // Agregar SeleccionTanque como la primera escena
};

export default config;
