import React from 'react';
import jovensTerreno from '../img/jovensTerreno.jpg';
import '../styles/empresa.css';

const Empresa = () => {

    return (
        <>
        <div className='empresa-origem'>
            <div className='origem-texto'>
                <h2>A origem</h2>
                <p>A origem do nome JR vem do nome de dois irmãos que trabalhavam com construção e decidiram ter seu mercadinho no bairro que se mudaram. Aos poucos Juscelino e 
                    Rivelino foram conquistando a confiança dos moradores do bairro e se tornaram referência em qualidade e preço baixo. Hoje, o JR é uma rede de supermercados com
                    2 lojas, uma em Sorocaba e outra em Itu.
                </p>
            </div>
            <div className='origem-imagem'>
                <img src={jovensTerreno} alt="jovensTerreno" className='imagem-jovem' />
            </div>
        </div>
        </>
    );

};

export default Empresa;