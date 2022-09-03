import React from 'react'
import Cart from "./Cart";
import {useState,useEffect} from "react";

function Products() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  function addToCart(i) {
    let item = products[i];
    item.cnt++;
    let notFound = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].title === item.title) {
        notFound = false;
        break;
      }
    }
    let copy = notFound ? [...cart, item] : [...cart];
    setCart(copy);
  }

  // let cnt = cart.length;
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].cnt > 0) {
  //     cnt++;
  //   }
  // }
  return (
    <>
      <div className="groceries">
        {products.map((v, i) => (
          <div>
            <img src={v.image} alt="A vegetable." height="150" width="150" />
            <div>{v.title}</div>
            <button onClick={() => addToCart(i)}>Add to Cart</button>
          </div>
        ))}
      </div>

      
    <div>Products</div>
    Hi cart 
    {/* <div>Items: {cnt}</div> */}
      <Cart item={cart} />
    
    </>
    
  )
}

export default Products