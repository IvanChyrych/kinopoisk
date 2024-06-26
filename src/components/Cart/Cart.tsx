import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

import styles from "../styles/Cart.module.css";
// import { sumBy } from "../../utils/common";

const Cart = () => {
  
  // const { cart } = useSelector(({ user }) => user);
  const cart = JSON.parse(localStorage.getItem("cart"));




  
// console.log(tasks[0]);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };



        return (
          <section className={styles.cart}>
            <h2 className={styles.title}>Your favourites</h2>

        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { poster, name, title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <img width='100' src={poster?.url} alt="" />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{name}</div>
                  </div>

                  {/* <div className={styles.price}>{price}$</div> */}

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      {/* <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg> */}
                    </div>

                    {/* <span>{quantity}</span> */}

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      {/* <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg> */}
                    </div>
                  </div>

                  {/* <div className={styles.total}>{price * quantity}$</div> */}

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <button>delete</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            

          
          </div>
        </>
      
    </section>
  );
};

export default Cart;