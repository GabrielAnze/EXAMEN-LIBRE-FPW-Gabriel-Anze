import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido al Juego del Tanque</h1>
      <p>Haz clic en el botón para empezar a jugar.</p>
      <Link to="/juego">
        <button style={{ padding: '10px 20px', fontSize: '18px' }}>Iniciar Juego</button>
      </Link>
    </div>
  );
};

export default Home;
