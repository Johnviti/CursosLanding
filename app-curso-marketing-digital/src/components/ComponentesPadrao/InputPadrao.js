import React, { useRef, useState } from 'react';

const InputPadrao = ({ value, type }) => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const handleInputFocus = () => {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleInputChange = (event) => {
      setInputValue(event.target.value); 
    };

    return (
    <div className="input">
        <input 
        ref={inputRef}
        onFocus={handleInputFocus}
        type={type}
        required 
        name={value} 
        value={inputValue}
        onChange={handleInputChange}
        />
        <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default InputPadrao;
