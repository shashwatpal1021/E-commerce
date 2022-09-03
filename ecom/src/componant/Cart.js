import React from "react";
import { useState, useEffect } from "react";

function Cart({item}) {
  // const [c, setC] = useState(item);
  
  
  // const [products, setProducts] = useState([]);

  // let cnt = cart.length;
  console.log("hi shashwat")
  console.log(item);

  return (
    <>
      {/* <div>Cart
      <div className="App">
      <div>Items: {cnt}</div>
      {item.map((v, i) => (
        <div>
          <img src={v.image} alt="A vegetable." height="150" width="150" />
          <div>{v.title}</div> */}

      {/* <button>{v.cnt}</button> */}
      {/* </div>
      ))}
  
     
    </div>
    </div> */}
      <div className="container my-3 ">
        <nav class="navbar ">
          <div class="container-fluid">
            <h4 class="navbar-brand">
              <i class="fa fa-arrow-left mx-3"></i>Continue Shopping
            </h4>
            <button class="btn btn-outline-success ">
              <i class="fa fa-cart-arrow-down mx-1"></i>
              {5}
            </button>
          </div>
        </nav>
        <hr />
        <br />
        <div className="container">
          <h4>Shopping Cart</h4>
          <p>
            You Have <span>{5}</span> items in Shoppng Cart
          </p>

           {item.map((v) => ( 
            <>
              <div className=" py-3">
                <div class="d-flex justify-content-between  ">
                  <div class="align-self-center">
                    <img
                      src={v.image}
                      alt="timage"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div class="align-self-center ">
                    <h5>{v.title}</h5>
                    <p>hello</p>
                   </div>
                  <div class="align-self-center">
                    <i class="fa fa-plus mx-3"></i>

                    <button>5</button>

                    <i class="fa fa-minus mx-3"></i>
                  </div>
                  <div class="align-self-center">
                    <h4>{v.price}</h4>
                  </div>
                  
                  <div class="align-self-center ">
                    <i class="fa fa-trash mx-3 "></i>
                  </div>
                </div>
                <hr />
              </div>
            </>
          ))} 
        

          <div class="d-flex justify-content-end mx-3 py-3">
            <h5>
              Cart total: <span>2220rs</span>
            </h5>
          </div>
          <div class="d-flex justify-content-end mx-3">
            <button className="btn btn-outline-success btn-sm">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
