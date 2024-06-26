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
                <div className={styles.productsItemWrapper}>
                  <div className="products-poster">
                    <img width='200' src={poster?.url} alt="" />
                  </div>
                  <div className="products-title">{name}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar
