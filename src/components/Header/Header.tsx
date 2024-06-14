import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <div>Header</div>
        </Link>
      </div>
      <div className={styles.info}>
        <form className={styles.form}>
        <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
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
          <div className={styles.account}>
            <Link to={ROUTES.CART} className={styles.cart}>
              <span className={styles.count}>
                2
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Header
