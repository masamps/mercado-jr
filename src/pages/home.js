import React from 'react';
import Slider from 'react-slick';
import hortfruit from '../img/hortfruti.jpg';
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
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={hortfruit} alt="Imagem 1" className='imgStyle'/>
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </Slider>
    </div>
  );
};

export default Home;
