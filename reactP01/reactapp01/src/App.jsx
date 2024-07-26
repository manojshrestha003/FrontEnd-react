import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Items from './components/Items';

function App() {
  
  let Names = ['Manoj ', 'Nitish', 'Kapil', 'prensu', 'sabita', 'rachana', 'suchana'];
  return (
    <>
    <h1>Map method </h1>
    <ul classNameName="list-group">


      {Names.map((Name=>(  <li key={Name} className="list-group-item">{Name}</li> 
)))}
<Items name = 'Manoj Shrestha'></Items>
<h1>Conditional rendering </h1>




</ul>

      
    </>
  );
}

export default App;
