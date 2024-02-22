import React from 'react';
import './Form.css';
import Lottie from 'react-lottie';
import animationData from './animation/animation.json';
import animationDAtaDino from './animation/AnimationDino.json';
import animationSocialMedia from './animation/AnimationSocialMedia.json';


const Form = () => {
    return (
      <section className="container_form" id='container_form'>
        <div className="background_form">
            {/* <a href="/" className='logo_Andrade'><img src={logo} alt='Logo Andrade'></img></a> */}
            <div className="informacao_conteudo">
                <div className="texto">
                    <h1>APRENDA O MARKETING E EVOLUA SUA MENTE</h1>
                    <p>Lorem ipsum dolor sit amet. Nullam ullamco elit sed metus tincidunt, sed commodo velit posuere.</p>
                </div>
                <div className="lottieSocialMedia">
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationSocialMedia,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={225}
                        width={360}
                    />
                </div>            
                <div className="lottie">
                    <Lottie 
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        </div> 
        <div className="conteudo_form">
            <div className="conteudo_principal">
                <div className="texto_form">
                    <div className="container_texto_animation">
                        <div className="texto_formulario_container">
                            <h1>Mais de 200 alunos</h1>
                            <h1>Foram empregados</h1>
                        </div> 
                        <div className="lottieDivo">
                            <Lottie 
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationDAtaDino,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper elit sed metus tincidunt.</p>
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
      </section>  
    );
  };

export default Form;
