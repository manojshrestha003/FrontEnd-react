import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import ApptoDO from "./components/ApptoDO";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import './App.css';
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`The new item added name: ${itemName}  Date: ${itemDueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItem);
  };
  const handleDeleteItem =(todoItmeName)=>{
    const newToDoItems = todoItems.filter(item =>item.name!=todoItmeName) ;
    setTodoItems(newToDoItems);


  }

  return (
    <div className="toDo-container">
      <AppName />
      <ApptoDO onNewItem={handleNewItem} />
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems1={todoItems}  onDeleteClick = {handleDeleteItem}/>
    </div>
  );
}

export default App;
