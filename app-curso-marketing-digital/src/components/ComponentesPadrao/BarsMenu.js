import React from 'react';
import { IoMdMenu } from 'react-icons/io';

export const BarsMenu = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className='bar_menu'>
      <IoMdMenu size={40} />
    </button>
  );
};