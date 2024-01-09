import React, { useState } from 'react';
import '../styles/marmita.css';
import segunda from '../img/Cardapio-Seg.jpeg';
import terca from '../img/Cardapio-Ter.jpeg';

const Marmita = () => {

    const handleWhatsAppClick = () => {
        const whatsappLink = 'https://api.whatsapp.com/send/?phone=5515996328548&text=Ol%C3%A1%2C+gostaria+de+fazer+um+pedido&type=phone_number&app_absent=0';
        window.open(whatsappLink, '_blank');
    };

    const handleIfoodClick = () => {
        const ifoodLink = 'https://www.ifood.com.br/delivery/sorocaba-sp/rotisserie-jr-jardim-nilton-torres/027c682c-43f2-4053-8e9d-fe7998a2d857';
        window.open(ifoodLink, '_blank');
    };

    return (
        <div className="marmita">
            <h3>Entre em contato!</h3>
            <div className='botoes-div'>
                <div className='botao-whats'>
                    <button onClick={handleWhatsAppClick}>
                        Faça seu pedido no Whats!
                    </button>
                </div>
                <div className='botao-ifood'>
                    <button onClick={handleIfoodClick}>
                        Faça seu pedido no iFood!
                    </button>
            </div>
            </div>
            <h3>Confira nosso cardápio da semana.</h3>
            <div className='marmitas-div'>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={terca} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
                <div className='cardapios'>
                    <img src={segunda} alt="Imagem 1" className='cardapioStyle' />
                </div>
            </div>
        </div>
    );
};

export default Marmita;
