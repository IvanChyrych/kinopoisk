import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Header.module.css'
import { FaSearch, FaHeart } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({ query: searchValue });

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);

  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} />
        </Link>
      </div>
      <div className={styles.info}>
        <form className={styles.form}>
          <div className={styles.icon}>
            <FaSearch />
          </div>
          <div className='text-primary'>
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
              {data.docs.map(({ name, poster, id }) => {
                return (
                  <Link
                    key={id}
                    onClick={() => setSearchValue("")}
                    className={styles.item}
                    to={`/products/${id}`}
                  >
                    <img width='50' src={poster?.url} alt="" />
                    <div className={styles.title}>{name}</div>
                  </Link>
                );
              })}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.CART} className={styles.cart}>
            <FaHeart />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
