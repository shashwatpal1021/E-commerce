import React from "react";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import File from "./File";

function Products({product}) {
  const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState(products);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((products) => setProducts(products));
  // }, []);

  function addToCart(i) {
    let item = product[i];
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

  let cnt = cart.length;
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].cnt > 0) {
  //     cnt++;
  //   }
  // }
  // const Loading = () => {
  //   return <>Loading...</>;
  // };

  // const filterProduct = (cat) => {
  //   const updatedList = products.filter((x) => x.category == cat);
  //   setFilter(updatedList);
  // };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5  ">
          <buttons
            className="btn btn-outline-dark me-2"
            // onClick={() => setFilter(products)}
          >
            All
          </buttons>
          <buttons
            className="btn btn-outline-dark me-2"
            // onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </buttons>
          <buttons
            className="btn btn-outline-dark me-2"
            // onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </buttons>
          <buttons
            className="btn btn-outline-dark me-2 "
            // onClick={() => filterProduct("jewelery")}
          >
            Jewelerys
          </buttons>
          <buttons
            className="btn btn-outline-dark me-2"
            // onClick={() => filterProduct("electronics")}
          >
            Electronic
          </buttons>
        </div>
        {product.map((v, i) => {
          return (
            <>
              <div className="col-md-3 mb-4  ">
                <div className="card h-100 text-center p-4" key={v.id}>
                  <img
                    src={v.image}
                    className="card-img-top"
                    alt={v.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {v.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lad fw-bold">${v.price}</p>

                    <button
                      className="btn btn-outline-dark mx-2"
                      onClick={() => addToCart(i)}
                    >
                      ADD TO CART
                    </button>
                    {/* <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      View
                    </NavLink> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* <div className="groceries">
        {products.map((v, i) => (
          <div>
            <img src={v.image} alt="A vegetable." height="150" width="150" />
            <div>{v.title}</div>
            <button onClick={() => addToCart(i)}>Add to Cart</button>
          </div>
        ))}
      </div> */}
      <div className="containr my-5 py-5 mx-3 my-3">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="dispaly-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          { <ShowProducts />}
        </div>
      </div>

      <div>Items: {cnt}</div>
      
      <Cart item={cart} />
      
      
    </>
  );
}

export default Products;
