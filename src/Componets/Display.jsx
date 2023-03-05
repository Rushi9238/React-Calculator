import React from 'react'
import '../CSS_files/Display.css'
const Display = ({display,his,cal}) => {
  return (
   <>
    <div className='Display'>
      {/* {his} */}
      
      <div className="histroy">
         
      </div>
      <div className="calculate">
        <h4>{cal}</h4>
      <h3>{display}</h3>
      </div>
      </div>
   </>
  )
}

export default Display