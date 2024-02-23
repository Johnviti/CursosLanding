import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

const BarsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bars-menu'>
      <button onClick={handleClick} className='bar_menu'>
        <IoMdMenu size={40} />
      </button>
      {isOpen && (
        <nav className='conteudo_navbar_mobile'>
          <ul className='list_navbar_mobile'>
              <li className="item_navbar_mobile">
                <a href="/" className="link_navbar">Início</a>
              </li>
              <li className="item_navbar_mobile">
                <a href="#container_descricao" className="link_navbar">Sobre</a>
              </li>
              <li className="item_navbar_mobile">
                <a href="#container_horas" className="link_navbar">Informações</a>
              </li>
              <li className="item_navbar_mobile">
                <a href="#container_form" className="link_navbar">Formulário</a>
              </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BarsMenu;
