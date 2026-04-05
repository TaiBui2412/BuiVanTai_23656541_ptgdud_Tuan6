import React from 'react'
import './Item.css'
const Item = ({id,name}) => {
  return (
    <div className="item-card">
        <h2>{name}</h2>
        <p>ID: {id}</p>
    </div>
  )
}

export default Item