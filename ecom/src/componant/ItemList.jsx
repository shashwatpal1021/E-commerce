import React from 'react'
import {useState,useEffect} from "react";

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <div>ItemList</div>
  )
}

export default ItemList