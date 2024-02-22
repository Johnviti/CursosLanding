import React from 'react';
import './Horas.css';

const Horas = () => {
    return (
        <div className="container_horas" id='container_horas'>
            <div className="foto_background"></div>
            <div className="conteudo_horas">
                <div className="social_links">
                    <div className="grupo_links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/25" alt="Imagem do instagram"></img></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/25" alt="Imagem do facebook"></img></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="https://via.placeholder.com/25" alt="Imagem do linkedin"></img></a>
                    </div>
                    <div className="texto_links">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ed commodo velit posuere.</p>
                    </div>
                </div>
                <div className="texto_horas">
                    <h1>+100 Horas</h1>
                    <p>de Aprendizado</p>
                    <p>Intenso!</p>
                </div>
            </div>
        </div>
    );
};

export default Horas;