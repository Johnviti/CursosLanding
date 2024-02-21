import React from 'react';
import './Form.css';

const Form = () => {
    return (
      <div className="container_form">
        <div className="informacao_form">
            <div className="logo">
                <img src="https://via.placeholder.com/150" alt="Imagem de um computador"></img>
            </div>
            <div className="texto">
                <h1>VOCÊ VAI APRENDER AINDA MAIS SOBRE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                <button>Acesse</button>
            </div>
        </div> 
        <div className="conteudo_form">
            <div className="texto_form">
                <h3>Marketing Digital</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
            </div>
            <div className="grupo_input">
                <div className="input">
                    <label htmlFor="email">Example:</label>
                    <input type="email" id="email" />
                </div>
                <div className="input">
                    <label htmlFor="email">Example:</label>
                    <input type="email" id="email" />
                </div>
                <div className="input">
                    <label htmlFor="email">Example:</label>
                    <input type="email" id="email" />
                </div>
                <div className="input_check">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Check me</label>
                </div>
                <div className="grupo_button">
                    <button>Enviar</button>
                </div>
            </div>
        </div>
      </div>  
    );
  };

export default Form;
