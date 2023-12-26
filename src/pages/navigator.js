import React from 'react';
import '../styles/navigator.css';
import { Link } from 'react-router-dom';
import mercadoJRLogo from '../img/mercadoJR.png';

function Navigator() {
  return (
    
    <header className="menu-header">
        <div className="logo-container">
        <img src={mercadoJRLogo} alt="Logo" className="logo" />
      </div>
      <nav className="menu-container">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Empresa">A Empresa</Link></li>
          <li><Link to="/Fale">Fale Conosco</Link></li>
          <li><Link to="/Trabalhe">Trabalhe Conosco</Link></li>
        </ul>
      </nav>
    </header>
   
  );
}

export default Navigator;