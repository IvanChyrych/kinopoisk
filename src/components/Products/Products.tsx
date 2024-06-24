import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Products.module.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { list } = useSelector(({ Products }) => Products)


  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
        Products
      </div>
      <nav>
        <ul className={styles.menu}>
          {list?.docs.map(({ id, name, poster }) => (
            <li key={id}>
              <NavLink to={`/products/${id}`}>
                <div className="products-title">{name}</div>
                <div className="products-poster">
                  <img width='200' src={poster?.url} alt="" />
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" className={styles.link}>Help</a>
        <a href="/terms">Terms & Conditions</a>
      </div>
    </section>
  )
}

export default Sidebar