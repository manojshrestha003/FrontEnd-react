import React, { useState } from 'react';
import Item from '../Item';

const FoodItems = ({ food }) => {
  // Initialize state with an empty array for active items
  const [activeItems, setActiveItems] = useState([]);

  // Function to handle the Buy button click
  const onBuyButton = (item) => {
    setActiveItems((prevItems) => [...prevItems, item]);  // Add item to the activeItems list
  }

  return (
    <ul className="list-group">
      {food.map((foodItem, index) => (
        <Item
          key={index}  // Using index as key; ensure foodItem is unique or use a different unique key
          bought={activeItems.includes(foodItem)}  // Check if foodItem is in the activeItems list
          food={foodItem}
          onBuy={onBuyButton}  // Pass onBuy function to the Item component
        />
      ))}
    </ul>
  );
};

export default FoodItems;
