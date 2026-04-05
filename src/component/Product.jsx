import React from 'react'
import Item from './Item'
import "./Product.css"
const Product = () => {
  return (
    <div className="product-page">
        <h1>Product Page</h1>
        <Item id={1} name="Samsung" ></Item>
        <Item id={2} name="iPhone" ></Item>
        <Item id={3} name="Sony" ></Item>
    </div>
  )
}

export default Product