import React, { useState } from 'react';
import styles from './App.module.css'; // Import CSS module
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [calVal ,setCalVal] = useState("");
  const onButtonClick =(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");

    }
    else if(buttonText==='='){
     const result = eval(calVal);
     setCalVal(result);
    }
    else{
      const displayNewValue  = calVal + buttonText;
      setCalVal(displayNewValue);

    }

  }




  return (
    <>
      <h1 style={{'textAlign':'center', 'color':'white'}}>Calculator</h1>
      <div className={styles.calculator}>
        <Display displayVal = {calVal}></Display>
        <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>



      </div>
    </>
  );
}

export default App;
