import React from 'react';
import '../styles/menu.css';
import mercadoJRLogo from '../img/mercadoJR.png';

function Menu() {
  return (
    <header className="menu-header">
        <div className="logo-container">
        <img src={mercadoJRLogo} alt="Logo" className="logo" />
      </div>
      <nav className="menu-container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Carrinho</a></li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </header>
  );
}

export default Menu;