import React from 'react';
import './Horas.css';

const Horas = () => {
    return (
        <div className="container_horas">
            <div className="foto_background"></div>
            <div className="conteudo_horas">
                <div className="social_links">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <div className="texto_links">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                    </div>
                </div>
                <div className="texto_horas">
                    <h1>VOCÊ VAI APRENDER AINDA MAIS SOBRE</h1>
                </div>
            </div>
        </div>
    );
};

export default Horas;