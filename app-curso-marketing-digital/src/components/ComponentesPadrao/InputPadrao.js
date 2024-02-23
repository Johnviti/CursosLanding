import React, { useRef } from 'react';

const InputPadrao = ({ value, type }) => {
    const inputRef = useRef(null);
  
    const handleInputFocus = () => {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
    <div className="input">
        <input 
        ref={inputRef}
        onFocus={handleInputFocus}
        type={type}
        required 
        name={value} 
        value=""
        />
        <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default InputPadrao;
