import React from "react";

function Header(props) {
    console.log("header" ,props.data)
  return (
    <div>
      <div id="add-to-cart">
        <span className="cart-count">{props.cardData.length}</span>
        <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" />
      </div>
    </div>
  );
}

export default Header;
