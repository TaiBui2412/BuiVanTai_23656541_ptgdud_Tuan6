import React from "react";
import "./Item.css";
import { useParams } from "react-router-dom";
const Item = () => {
  const { id } = useParams();
  return (
    <div className="item-card">
      <h2>xxx</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default Item;
