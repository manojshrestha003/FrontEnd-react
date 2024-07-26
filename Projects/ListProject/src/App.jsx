import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from 'react';

function App() {
  // State to manage the list of food items
  const [foodItem, setFoodItems] = useState([
    
  ]);

  // Function to handle the Enter key press in the input field
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newFoodItem = event.target.value;
      if (newFoodItem) {
        // Update state with the new food item
        setFoodItems((prevItems) => [...prevItems, newFoodItem]);
        console.log("New food item entered is " + newFoodItem);
      event.target.value = ''; // Clear the input field after adding
      }
    }
  };

  return (
    <Container>
      <h1 className="food-items">Nepali Foods</h1>
      <ErrorMessage food={foodItem} />
      <FoodInput handleKeyDown={onKeyDown} />
      <FoodItems food={foodItem} />
    </Container>
  );
}

export default App;
