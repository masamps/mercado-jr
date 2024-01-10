import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mercadoJRLogo from '../img/mercadoJR.png';
import '../styles/navigator.css';

function Navigator() {
  const location = useLocation();

  return (
    <header className="menu-header">
      <div className="logo-container">
        <img src={mercadoJRLogo} alt="Logo" className="logo" />
      </div>
      <nav className="menu-container">
        <ul>
          <li className={location.pathname === '/Home' ? 'active' : ''}>
            <Link to="/Home">Inicio</Link>
          </li>
          <li className={location.pathname === '/Empresa' ? 'active' : ''}>
            <Link to="/Empresa">A Empresa</Link>
          </li>
          <li className={location.pathname === '/Marmita' ? 'active' : ''}>
            <Link to="/Marmita">Marmita</Link>
          </li>
          <li className={location.pathname === '/Trabalhe' ? 'active' : ''}>
            <Link to="/Trabalhe">Trabalhe Conosco</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigator;
