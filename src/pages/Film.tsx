import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../router";

// import { addItemToCart } from "../redux/userSlice";

const Product = (item) => {
  const { poster, name, description, year, movieLength
  } = item;

  // const dispatch = useDispatch();

  // const addToCart = () => {
  //   dispatch(addItemToCart(item));
  // };

  return (
    <section >
      <div >
        <div >
          <img width='250' src={poster?.url} alt="" />
          <button
            // onClick={addToCart}
            
          >
            Add to favourites
          </button>
        </div>

        <div >

          <h1 >{name}</h1>
          <h2>Год: {year}</h2>
          <h2>Продолжительность: {movieLength
          } мин.</h2>
          <p >{description}</p>

          <div >

          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;