import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';
import './Descricao.css';

import foto_marketing from '../../assets/img/foto_marketing.png';
import detalhe3 from '../../assets/img/detalhe3.png';
import item1 from '../../assets/img/item1.png';
import item2 from '../../assets/img/item2.png';
import item3 from '../../assets/img/item3.png';


import Card from '../ComponentesPadrao/Card';
import SkillItem from '../ComponentesPadrao/SkillsItem';
import Detalhe from '../ComponentesPadrao/Detalhe';

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
        sr.reveal('.foto_marketing, .card', {
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
      <section className="container_descricao" id='container_descricao'>
        <div className="texto_descricao"> 
            <h1>VOCÊ VAI APRENDER AINDA MAIS SOBRE</h1> 
        </div>
        <div className="conteudo_detalhe">
            <Detalhe 
                imagem={detalhe3} 
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper" 
                descricao="Imagem de um computador"
            />
            <Detalhe 
                imagem={detalhe3} 
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper" 
                descricao="Imagem de um computador"
            />
            <Detalhe 
                imagem={detalhe3}
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam" 
                descricao="Imagem de um computador"
            />
        </div> 
        <div className="container_descricao_marketing">
            <div className="foto_marketing">
                <img src={foto_marketing} alt="Imagem de um computador"></img>
            </div>
            <div className="skills_curso">
                <SkillItem 
                    imagem={item1} 
                    titulo="Marketing Digital" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere." 
                />
                <SkillItem 
                    imagem={item2} 
                    titulo="Marketing Digital" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere." 
                />
                <SkillItem 
                    imagem={item3} 
                    titulo="Marketing Digital" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere." 
                />
            </div>
        </div>
        <div className="conteudo_card">
            <Card titulo="20 milhoes" texto="Lorem ipsum as dolor sit amet, asd adipiscing elit."/>
            <Card titulo="57 anos" texto="Lorem ipsum dolor sit amet, consectet adipis."/>
            <Card titulo="Nota 10" texto="Lorem asd asdas ipsum dolor sit adipiscing elit."/>
        </div>
      </section>  
    );
  };

export default Descricao;
