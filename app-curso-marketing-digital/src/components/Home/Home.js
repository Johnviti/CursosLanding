import React from 'react';
import './Home.css';
import homeImagem from '../../assets/img/Img-home2.png';
import Cena from './3D/Cena';

const Home = () => {
  return (
    <section className="home">
      <ul className="fundo_animado">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="conteudo_home">
        <div className="texto_home">
          <h1>Acelere Sua carreira<br></br> Faça Marketing Digital!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit 
            sed metus tincidunt, seddd <br></br> Clique na animacao para pausar ou continuar!!</p>
          <Cena/>
        </div>
        <button className="button_home">Inscreva-se agora</button>
      </div>
      <div className="conteudo_imagem">
        <img src={homeImagem} alt='Logo Andrade'></img>
      </div>
    </section>
  );
};

export default Home;
