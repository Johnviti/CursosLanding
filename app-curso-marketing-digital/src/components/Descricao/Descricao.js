import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

import './Descricao.css';


const Descricao = () => {

    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.detalhe, .skills_item', {
          origin: 'bottom',
          distance: '20px',
          duration: 2000,
          delay: 0,
          opacity: 0,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          mobile: true,
          reset: false,
          viewFactor: 0.2,
        });
        sr.reveal('.foto_marketing', {
            origin: 'left',
            distance: '20px',
            duration: 3000,
            delay: 0,
            opacity: 0,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            mobile: true,
            reset: false,
            viewFactor: 0.2,
        });
      }, []);

    return (
      <div className="container_descricao">
        <div className="texto_descricao"> 
            <h1>VOCÊ VAI APRENDER AINDA MAIS SOBRE</h1> 
        </div>
        <div className="conteudo_detalhe">
            <div className="detalhe">
                <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper</p>
            </div> 
            <div className="detalhe">
                <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper</p>
            </div> 
            <div className="detalhe">
                <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
            </div> 
        </div> 
        <div className="container_descricao_marketing">
            <div className="foto_marketing">
                <img src="https://via.placeholder.com/600x700" alt="Imagem de um computador"></img>
            </div>
            <div className="skills_curso">
                <div className="skills_item">
                    <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                    <h2>Marketing Digital</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                </div>
                <div className="skills_item">
                    <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                    <h2>Marketing Digital</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                </div>
                <div className="skills_item">
                    <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
                    <h2>Marketing Digital</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                </div>
            </div>
        </div>
        <div className="conteudo_card">
            <div className="card">
                <h3>20 milhoes</h3>
                <p>Lorem ipsum as dolor sit amet, asd adipiscing elit.</p>
            </div>
            <div className="card">
                <h3>57 anos</h3>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
            </div>
            <div className="card">
                <h3>Nota 10</h3>
                <p>Lorem asd asdas ipsum dolor sit adipiscing elit.</p>
            </div>
        </div>
      </div>  
    );
  };

export default Descricao;
