import React from 'react'
import Navbar from "./Navbar"
import Products from "./Products";

function Home() {
  return (
    <>
        <Navbar/>
    
        <h1>Home</h1>

        <img
                src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=2000"
                className="card-img"
                alt="BackGround-img"
                height="550px"
            />
    <hr/>
    <div><Products/></div>
    </>
  )
}

export default Home