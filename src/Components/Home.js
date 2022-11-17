import React from "react";

function Home(props) {
    console.log("Home" ,props)
  return (
    <div>
      <h1> Home Components </h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCZLKsBb31SP0LKhk5eSaaATJv61NR3P75w&usqp=CAU" />
        </div>
        <div className="text-wrapper item">
          <div>I-Phone</div>
          <div>Price: $1000.00</div>
        </div>
        <div className="btn-wrapper item">
          <button 
          onClick={()=>props.addToCartHandler({price:1000 , name :'i phone 11'})
          
          }>
            Add to Cart</button>
        </div>
        <div className="btn-wrapper item">
          <button 
          onClick={()=>props.RemoveTocartHandler()
          
          }>
            Remove to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
