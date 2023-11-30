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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Produtos</Link></li>
          <li><Link to="/">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
   
  );
}

export default Navigator;