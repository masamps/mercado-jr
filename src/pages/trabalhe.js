import React, { useState } from 'react';
import '../styles/faleConosco.css';

const Trabalhe = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [arquivo, setArquivo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aqui você pode construir um objeto FormData para enviar dados e arquivo
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('mensagem', mensagem);
        formData.append('arquivo', arquivo);

        try {
            const response = await fetch('http://localhost:3001/send', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                setNome('');
                setTelefone('');
                setEmail('');
                setMensagem('');
                setArquivo(null);
            } else {
                throw new Error('Erro ao enviar mensagem');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

    return (
        <div className="formulario">
            <h2>Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="form">
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
                        type="tel" 
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
                <label>
                    Anexar Arquivo:
                    <input 
                        type="file" 
                        onChange={(e) => setArquivo(e.target.files[0])} 
                        className="formulario-input" 
                    />
                </label>
                <br />
                <button type="submit" className="formulario-button">Enviar</button>
            </form>
        </div>
    );
};

export default Trabalhe;
