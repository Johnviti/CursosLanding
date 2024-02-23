import React from 'react';
import './Horas.css';
import ico1 from '../../assets/img/ico1.png';
import ico2 from '../../assets/img/ico2.png';
import ico3 from '../../assets/img/ico3.png';
import ico4 from '../../assets/img/ico4.png';

const Horas = () => {
    return (
        <section className="container_horas" id='container_horas'>
            <div className="foto_background"></div>
            <div className="conteudo_horas">
                <div className="social_links">
                    <div className="grupo_links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={ico1} alt="Imagem do instagram"></img></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={ico2} alt="Imagem do facebook"></img></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={ico3} alt="Imagem do linkedin"></img></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={ico4} alt="Imagem do linkedin"></img></a>
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
        </section>
    );
};

export default Horas;