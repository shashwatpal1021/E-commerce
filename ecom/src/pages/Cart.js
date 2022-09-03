import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';

import ShopContext from "../context/shop-context";
import MainNavigation from "../components/MainNavigation";
// import { removeProductFromCart } from '../store/actions';
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
              <img
                    src={cartItem.image}
                    className="card-img-top"
                    alt={cartItem.title}
                    height="250px"
                  />
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};



export default CartPage;
