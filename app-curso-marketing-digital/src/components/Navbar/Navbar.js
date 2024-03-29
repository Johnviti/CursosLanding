import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import BarsMenu from '../ComponentesPadrao/BarsMenu';

const Navbar = () => {
  return (
      <header className="navbar">
          <BarsMenu/>
          <nav className="conteudo_navbar">
            <a href="/" className="logo_navbar"><img src={logo} alt='Logo Andrade'></img> AndradeMarketing</a>
            <ul className="list_navbar">
              <li className="item_navbar">
                <a href="/" className="link_navbar">Início</a>
              </li>
              <li className="item_navbar">
                <a href="#container_descricao" className="link_navbar">Sobre</a>
              </li>
              <li className="item_navbar">
                <a href="#container_horas" className="link_navbar">Informações</a>
              </li>
              <li className="item_navbar">
                <a href="#container_form" className="link_navbar">Formulário</a>
              </li>
            </ul>
          </nav>
          <a href="/contact" className="button_navbar">Inscreva-se</a>
      </header>
    );
  };

export default Navbar;
    