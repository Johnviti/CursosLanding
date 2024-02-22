import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="conteudo_navbar">
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
          </div>
          <a href="/contact" className="button_navbar">Inscreva-se</a>
      </nav>
    );
  };

export default Navbar;
    