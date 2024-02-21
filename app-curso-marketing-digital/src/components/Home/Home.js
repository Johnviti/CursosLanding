import React from 'react';
import './Home.css';
import homeImagem from '../../assets/img/Img-home2.png';
import Cena from './Cena';

const Home = () => {
  return (
    <div className="home">
      <div className="conteudo_home">
        <div className="texto_home">
          <h1>Acelere Sua carreira<br></br> Faça Marketing Digital!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo
            velit posuere.</p>
          <div className="canva-3d">
            {/* Coracao 3D */}
            <Cena />
          </div>
        </div>
        <button className="btn-home">Inscreva-se</button>
      </div>
      <div className="conteudo_imagem">
        <img src={homeImagem} alt='Logo Andrade'></img>
      </div>
    </div>
  );
};

export default Home;
