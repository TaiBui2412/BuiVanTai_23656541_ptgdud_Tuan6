import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-page">
      <h2>Danh sách sản phẩm</h2>
      <ul>
        <li>
          <Link to="/product/1">Samsung</Link>
        </li>
        <li>
          <Link to="/product/2">iPhone</Link>
        </li>
        <li>
          <Link to="/product/3">Sony</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
