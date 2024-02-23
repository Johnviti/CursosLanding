import React from 'react';

const SkillItem = ({ imagem, titulo, texto, descricao }) => {

  const alt = descricao ? descricao : "Imagem ilustrativa";

  return (
    <div className="skills_item">
        <img src={imagem} alt={alt} />
        <h2>{titulo}</h2>
        <p>{texto}</p>
    </div>
  );
};

export default SkillItem;