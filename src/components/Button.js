import React from 'react'
// import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <div className='my-3'>
      <button className={`px-5 py-3 ${props.btnColor}`}>{props.btnName}</button>
    </div>
  )
}

export default Button;
