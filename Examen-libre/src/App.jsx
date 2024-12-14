import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game'; // Componente de juego
import Home from './components/Home'; // Página principal

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con el enlace al juego */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta del juego */}
        <Route path="/juego" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;

