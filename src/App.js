import React, { useEffect, useState } from 'react';
import './App.css';
import '../src/CSS_files/Comman.css'
import Display from './Componets/Display';
import Keypad from './Componets/Keypad';
function App() {

  const[cal,setcal]=useState("");

  const[display,setdisplay]=useState("")
  const [his,setHis]=useState([])
 
  function getvalue(e){
        setcal(cal+e)
        
         
  }
  function calculte(){
    setdisplay(eval(cal).toFixed(2))
    // setHis(...his,cal)
    // setHis(...his,cal)
    // console.log('hello',display);
  }
  // useEffect(()=>{
   
  //   setHis(...his,cal)
  //   console.log(his);
  // },[his])

  function backValue(){
    setcal(cal.substring(0,cal.length-1))
    console.log(cal);

  }
  function clearValue(){
    // console.log('hello');
    setdisplay("")
    setcal("")
  }
  return (
    <>
      <div className="App flex ">
        <h1>CALCULATOR <p>using </p> <p style={{textDecoration:'underline'}}><span>R</span>eactJS</p></h1>
        <div className='mainContainer flex center fle-col'>

          <Display display={display} cal={cal} his={his}/>
          <Keypad getvalue={getvalue} calculte={calculte} clearValue={clearValue} backValue={backValue} />
        </div>

      </div>
    </>
  );
}

export default App;
