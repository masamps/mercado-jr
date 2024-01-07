import React from 'react';
import Slider from 'react-slick';
import hortfruit from '../img/hortfruti.jpg';
import natal from '../img/natal.jpg';
import niltonTorres from '../img/NiltonTorres.png';
import portalEden from '../img/portalEden.png';
import '../styles/home.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

// Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2500,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div >
            <img src={hortfruit} alt="Imagem 1" className='imgStyle' />
          </div>
          <div>
            <img src={natal} alt="Imagem 2" className='imgStyle' />
          </div>
          {/* Adicione mais imagens conforme necessário */}
        </Slider>
      </div>
      <div className='texto-unidades'>
        <h1>Nossas Lojas</h1>
      </div>
      <div className="image-div">
        <div className="image-with-blur">
            <img src={niltonTorres} alt="Imagem 3" />
              <div className="image-text">
                <p>R. Pedro José Bicudo, 62 - Jardim Nilton Torres, Sorocaba</p>
              </div>
        </div>
          <div className="image-with-blur2">
            <img src={portalEden} alt="Imagem 4" />
            <div className="image-text2">
                <p>Célio Figueiredo Silva, 263 - Portal do Éden, Itu</p>
              </div>
        </div>
      </div >
    </>
  );
};

export default Home;
