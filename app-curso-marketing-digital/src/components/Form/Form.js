import React, {useState} from 'react';
import './Form.css';

import logo from '../../assets/img/logo.png';

const Form = () => {
    const [input, setInput] = useState('');
    return (
      <div className="container_form">
        <div className="informacao_form">
            {/* <a href="/" className='logo_Andrade'><img src={logo} alt='Logo Andrade'></img></a> */}
            <div className="texto">
                <h1>APRENDA O MARKETING E EVOLUA SUA MENTE</h1>
                <p>Lorem ipsum dolor sit amet. Nullam ullamco elit sed metus tincidunt, sed commodo velit posuere.</p>
            </div>
        </div> 
        <div className="conteudo_form">
            <div className="conteudo_principal">
                <div className="texto_form">
                    <h1>Mais de 200 alunos</h1>
                    <h1>Foram empregados</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt, sed commodo velit posuere.</p>
                </div>
                <div className="grupo_input">
                    <div className="input">
                        <input 
                        type="text"
                        required 
                        name="cep" 
                        value=""
                        />
                        <label for="cep">CEP</label>
                    </div>
                    <div className="input">
                        <input 
                        type="text"
                        required 
                        name="nome" 
                        value=""
                        />
                        <label for="nome">NOME</label>
                    </div>
                    <div className="input">
                        <input 
                        type="text"
                        required 
                        name="telefone" 
                        value=""
                        />
                        <label for="telefone">TELEFONE</label>
                    </div>
                    <div className="grupo_button">
                        <button className='enviar'>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    );
  };

export default Form;
