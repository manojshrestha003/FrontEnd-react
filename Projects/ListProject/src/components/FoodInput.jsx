// FoodInput.jsx
import React from 'react';
import style from './FoodInput.module.css';
function FoodInput({ handleKeyDown }) {
  return (
    <input className={style.foodInput}
      type="text" 
      onKeyDown={handleKeyDown} 
      placeholder="Press Enter to add a food item" 
    />
  );
}

export default FoodInput;
