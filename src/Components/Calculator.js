import React, { useState } from 'react';
import "../Style/Calculator.css";

function Calculator() {
  const [display,setDisplay] = useState('')
  const handleClick = (value)=>{
    setDisplay(display+value)
  }

  const findResult = ()=>{
    try {
      const result = eval(display)
      console.log(typeof result)
      setDisplay(result+'')      
    } catch (error) {
      console.log(error);
      setDisplay('ERROR')
      setTimeout(()=>{setDisplay('')},1000)
    }
  }
  const backSpace = ()=>{
    const str = display.slice(0,-1)
    setDisplay(str)
  }
  return (
    <div className='calculator'>
      <div className='calculator-section'>
      <h1 style={{textAlign:'center', margin:'auto',padding:'6px',fontSize:'2em' ,backgroundColor:'black',color:'white'}}>Calculator</h1>
        <div className='display' id="display">{display}</div>
        <div className='buttons'>
          <div className='row'>
            <button className='col number' onClick={()=>handleClick('1')}>1</button>
            <button className='col number' onClick={()=>handleClick('2')}>2</button>
            <button className='col number' onClick={()=>handleClick('3')}>3</button>
            <button className='col operator' onClick={()=>handleClick('+')}>+</button>
          </div>
          <div className='row'>
            <button className='col number' onClick={()=>handleClick('4')}>4</button>
            <button className='col number' onClick={()=>handleClick('5')}>5</button>
            <button className='col number' onClick={()=>handleClick('6')}>6</button>
            <button className='col operator' onClick={()=>handleClick('-')}>-</button>
          </div>
          <div className='row'>
            <button className='col number' onClick={()=>handleClick('7')}>7</button>
            <button className='col number' onClick={()=>handleClick('8')}>8</button>
            <button className='col number' onClick={()=>handleClick('9')}>9</button>
            <button className='col operator' onClick={()=>handleClick('*')}>*</button>
          </div>
          <div className='row'>
            <button className='col decimal' onClick={()=>handleClick('.')}>.</button>
            <button className='col number' onClick={()=>handleClick('0')}>0</button>
            <button className='col equal' onClick={findResult}>=</button>
            <button className='col operator' onClick={()=>handleClick('/')}>/</button>
          </div>
          <div className='row'>
            <div className='col clear'style={{textAlign:'center'}} onClick={()=>backSpace()}>BACK</div>
          </div>
          <div className='row'>
            <div className='col clear' style={{textAlign:'center'}} onClick={()=>setDisplay('')}>CLEAR</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
