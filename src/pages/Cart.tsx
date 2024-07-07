import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addItemToCart,
//   removeItemFromCart,
// } from "../redux/userSlice";



const Cart = () => {

  const cart = JSON.parse(localStorage.getItem("cart"));

  // const removeItem = (id) => {
  //   dispatch(removeItemFromCart(id));
  // };
  return (
    <section >
      <h2 >Your favourites</h2>

      <>
        {/* <div >
          {cart.map((item) => {
            const { poster, name, title, category, images, price, id, quantity } = item;

            return (
              <div key={id}>
                <img width='100' src={poster?.url} alt="" />
                <div >
                  <h3 >{title}</h3>
                  <div >{name}</div>
                </div>
                <div >
                  <div
                    
                    onClick={() =>
                      changeQuantity(item, Math.max(1, quantity - 1))
                    }
                  >

                  </div>
                  <div
                    
                    onClick={() =>
                      changeQuantity(item, Math.max(1, quantity + 1))
                    }
                  >
                  </div>
                </div>
                <div
                  
                  onClick={() => removeItem(item.id)}
                >
                  <button>delete</button>
                </div>
              </div>
            );
          })}
        </div> */}
        <div >
        </div>
      </>
    </section>
  );
};

export default Cart;