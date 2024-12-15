import MenuPrincipal from 'src\escenes\MenuPrincipal.js';
import NivelUno from 'src\escenes\NivelUno.js';
//import NivelDos from './scenes/NivelDos.js';
//import NivelTres from './scenes/NivelTres.js';
import GameOver from './scenes/GameOver.js';
import Victoria from './scenes/Victoria.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [MenuPrincipal, NivelUno, NivelDos, NivelTres, GameOver, Victoria]
};

const game = new Phaser.Game(config);

