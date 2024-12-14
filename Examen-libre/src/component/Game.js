import React, { useEffect } from 'react';
import game from '../phaser-videojuegos/index';

const Game = () => {
  useEffect(() => {
    // Iniciar el juego cuando el componente se monta
    game.scene.start('SeleccionTanque'); // Iniciar la escena de selección de tanque
    return () => {
      game.destroy(true); // Limpiar el juego cuando el componente se desmonta
    };
  }, []);

  return <div id="game-container"></div>;
};

export default Game;