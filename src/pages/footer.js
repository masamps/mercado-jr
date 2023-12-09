import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
     <footer >
 
         <div class="footer-section">
             <h2>Institucional</h2>
             <ul class='ul-footer'>
                 <li><a href="#">Home</a></li>
                 <li><a href="#">A Empresa</a></li>
                 <li><a href="#">Fale Conosco</a></li>
                 <li><a href="#">Trabalhe Conosco</a></li>
             </ul>
         </div>
         <div class="footer-section">
             <h2>Redes Sociais</h2>
             <ul class='ul-footer'>
                 <li><a href='https://www.instagram.com/jrsupermercadosorocaba/' target='_blank'>Instagram</a></li>
                 <li><a href='https://www.facebook.com/SupermercadoJRSorocaba/' target='_blank'>Facebook </a></li>
             </ul>
         </div>
         <p class='p-footer'>Todos os direitos reservados a Supermercado JR</p>
     </footer>
  );
 };
 
 export default Footer;