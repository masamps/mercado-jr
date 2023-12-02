import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footerGeral'>
        <div className='divInstitucional'>
            <h2>Institucional
                
            </h2>
            <ul>
                <li>Home</li>
                <li>A Empresa</li>
                <li>Fale Conosco</li>
                <li>Trabalhe Conosco</li>
            </ul>
        </div>
        <div>
            <h2>Redes Sociais</h2>
            <ul>
                <li>
                    <a href='https://www.instagram.com/jrsupermercadosorocaba/' target='_blank'>
                        
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/SupermercadoJRSorocaba/' target='_blank'>
                        <span>Facebook</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;