import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Header.module.css'
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({ query: searchValue });

  console.log(data);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
    console.log(value);

  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.info}>
        <form className={styles.form}>
          <div className={styles.icon}>
            <FaSearch />
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name='query'
              value={searchValue}
              autoComplete='off'
              onChange={handleSearch}
              placeholder='Search...' />
          </div>
          {searchValue && (
            <div className={styles.box}>
              {data.docs.map(({ name, images, id }) => {
                return (
                  <Link
                    key={id}
                    onClick={() => setSearchValue("")}
                    className={styles.item}
                    to={`/products/${id}`}
                  >
                    <div
                      className={styles.image}
                      // style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <div className={styles.title}>{name}</div>
                  </Link>
                );
              })}
            </div>
          )}

        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.cart}>
            <FaHeart />

          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <FaShoppingCart />
            <span className={styles.count}>
              2
            </span>
          </Link>
        </div>

      </div>
    </div>

  )
}

export default Header
