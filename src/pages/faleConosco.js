import React, { useState } from 'react';
import '../styles/faleConosco.css';

const Fale = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
        setNome('');
        setTelefone('');
        setEmail('');
        setMensagem('');
    };

    return (
        <div className="formulario">
            <h3>Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="form">
            <p className="titulo-formulario">Tem alguma sujestão, elogio, reclamação ou outro assunto relacionado a nossas lojas? Preencha o formulário abaixo:</p>
                <label>
                    Nome:
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        className="formulario-input" 
                    />
                </label>
                <br />
                <label>
                    Telefone:
                    <input 
                        type="number" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        className="formulario-input" 
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="formulario-input" 
                    />
                </label>
                <br />
                <label>
                    Mensagem:
                    <textarea 
                        value={mensagem} 
                        onChange={(e) => setMensagem(e.target.value)} 
                        className="formulario-textarea" 
                    />
                </label>
                <br />
                <button type="submit" className="formulario-button">Enviar</button>
            </form>
        </div>
    );
};

export default Fale;
