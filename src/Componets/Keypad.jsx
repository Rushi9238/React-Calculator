import React from 'react'
import '../CSS_files/Keypad.css'
const Keypad = ({ getvalue, calculte, clearValue,backValue }) => {
  return (

    <>
      <div className='Keypad'>
        <div onClick={() => clearValue()} className="number clear">AC</div>
        <div onClick={() => backValue()} className="number">Back</div>
        <div onClick={(e) => getvalue("+")} className="sign">+</div>
        <div onClick={(e) => getvalue("7")} className="number num">7</div>
        <div onClick={(e) => getvalue("8")} className="number num">8</div>
        <div onClick={(e) => getvalue("9")} className="number num">9</div>
        <div onClick={(e) => getvalue("*")} className="sign">X</div>
        <div onClick={(e) => getvalue("4")} className="number num">4</div>
        <div onClick={(e) => getvalue("5")} className="number num">5</div>
        <div onClick={(e) => getvalue("6")} className="number num">6</div>
        <div onClick={(e) => getvalue("-")} className="sign">-</div>
        <div onClick={(e) => getvalue("1")} className="number num">1</div>
        <div onClick={(e) => getvalue("2")} className="number num">2</div>
        <div onClick={(e) => getvalue("3")} className="number num">3</div>
        <div onClick={(e) => getvalue("/")} className="sign">/</div>
        <div onClick={(e) => getvalue(".")} className="number dot">.</div>
        <div onClick={(e) => getvalue("0")} className="number zero num">0</div>
        <div onClick={() => calculte()} className="qual">=</div>


      </div>
    </>
  )
}

export default Keypad