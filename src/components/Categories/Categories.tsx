import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Categories.module.css";

const categories = ({ title, style = {}, Categories = [], amount }) => {
 console.log(Categories);
 
  
 const list = Object.values(Categories).filter((_, i) => i < amount);
  console.log(list);
  return (
    <section className={styles.Categories} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, images, title,  price, name }) => (
          <Link to={`/Categories/${id}`} key={id} className={styles.product}>
            
            

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{name}</h3>
              {/* <div className={styles.cat}>{cat}</div> */}
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(price * 0.8)}$
                  </div>
                </div>

                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default categories;