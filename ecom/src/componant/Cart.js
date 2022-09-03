import React from 'react'
import { useState, useEffect } from "react";

function Cart({item}) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  let cnt =item.length;

  return (
    <div>Cart
      <div className="App">
      <div>Items: {cnt}</div>
      {item.map((v, i) => (
        <div>
          <img src={v.image} alt="A vegetable." height="150" width="150" />
          <div>{v.title}</div>

          {/* <button>{v.cnt}</button> */}
        </div>
      ))}
      <hr />
      {/* <div className="groceries">
        {products.map((v, i) => (
          <div>
            <img src={v.image} alt="A vegetable." height="150" width="150" />
            <div>{v.title}</div>
          </div>
        ))}
      </div> */}
    </div>
    </div>
  )
}

export default Cart


// import { useState, useEffect } from "react";


// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((products) => setProducts(products));
  // }, []);

//   function addToCart(i) {
//     let item = products[i];
//     item.cnt++;
//     let notFound = true;
//     for (let i = 0; i < cart.length; i++) {
//       if (cart[i].title === item.title) {
//         notFound = false;
//         break;
//       }
//     }
//     let copy = notFound ? [...cart, item] : [...cart];
//     setCart(copy);
//   }

//   let cnt = cart.length;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].cnt > 0) {
//       cnt++;
//     }
//   }
//   return (
    // <div className="App">
    //   <div>Items: {cnt}</div>
    //   {cart.map((v, i) => (
    //     <div>
    //       <img src={v.image} alt="A vegetable." height="150" width="150" />
    //       <div>{v.title}</div>

    //       {/* <button>{v.cnt}</button> */}
    //     </div>
    //   ))}
    //   <hr />
    //   <div className="groceries">
    //     {products.map((v, i) => (
    //       <div>
    //         <img src={v.image} alt="A vegetable." height="150" width="150" />
    //         <div>{v.title}</div>
    //         <button onClick={() => addToCart(i)}>Add to Cart</button>
    //       </div>
    //     ))}
    //   </div>

//       {/* <table>
//         <thead>
//           <tr>
//             <th>PostId</th>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Body</th>
//           </tr>
//         </thead> */}
//       {/* {data.map((item) => {
//           return (
//             <tbody>
//               <tr>
//                 <td>{item.postId}</td>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.body}</td>
//               </tr>
//             </tbody>
//           );
//         })} */}

//       {/* </table> */}
//     </div>
//   );
// }