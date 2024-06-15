import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Header.module.css'
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'

const Header = () => {
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
              name='search'
              value=''
              autoComplete='off'
              onChange={() => { }}
              placeholder='Search...' />
          </div>
          {false && <div className={styles.box}></div>}

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
