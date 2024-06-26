import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Sidebar.module.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { list } = useSelector(({ Categories }) => Categories)


  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
            <NavLink to={`/categories/${id}`}>
              {name}
            </NavLink>
          </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar
