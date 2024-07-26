



import React from 'react';

function ErrorMessage({ food }) {
  if (food.length === 0) {
    return <p>No food items available</p>;
  }
  return null;
}

export default ErrorMessage;
