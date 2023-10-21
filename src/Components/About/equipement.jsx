import React from 'react'

function Equipement(props) {
    let {
        img, 
        title, 
        content
    } = props.data
  return (
    <div className='text-white'>
        <img src={img} alt="img"/>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Equipement