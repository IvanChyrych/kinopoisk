import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../../utils/routes";

import styles from "../styles/Product.module.css";
import { addItemToCart } from "../../features/user/userSlice";

const Product = (item) => {
  const { poster, name, description, year, movieLength
  } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.info}>
        <div className={styles.leftSide}>
          <img width='250' src={poster?.url} alt="" />
          <button
            onClick={addToCart}
            className={styles.add}
          >
            Add to favourites
          </button>
        </div>

        <div className={styles.rightSide}>

          <h1 className={styles.title}>{name}</h1>
          <h2>Год: {year}</h2>
          <h2>Продолжительность: {movieLength
          } мин.</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;