import React from "react";

const Detalhe = ({imagem, texto, descricao}) =>{

    const alt = descricao ? descricao : "Imagem ilustrativa";
    return(
        <div className="detalhe">
            <img src={imagem} alt={alt}></img>
            <p>{texto}</p>
        </div>
    );
}

export default Detalhe;