import React from 'react'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={ LOGO } alt="" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a href="">Ivan</a>
      </div>
    </section>
  )
}

export default Footer
