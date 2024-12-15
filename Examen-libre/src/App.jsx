import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Página principal
import Game from './components/Game'; // Juego del Tanque
import Puzzle from './components/Puzzle'; // Juego Puzzle

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal con los enlaces */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta del juego del tanque */}
        <Route path="/tanque" element={<Game />} />
        
        {/* Ruta del juego Puzzle */}
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
    </Router>
  );
}

export default App;
