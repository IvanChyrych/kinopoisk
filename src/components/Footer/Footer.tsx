import React from 'react'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../router'
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'

const Footer = () => {
  return (
    <section >
      <div >
        <Link to={ROUTES.HOME}>
          <img src={ LOGO } alt="" />
        </Link>
      </div>
      <div >
        Developed by <a href="">Ivan</a>
      </div>
    </section>
  )
}

export default Footer
