import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SearchForm } from '../searchForm/index'

export function Header () {

  const dispatch = useDispatch()
  const navLinkClass = ({ isActive }) => isActive ? 'nav-link active px-3' : 'nav-link px-3'



  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
      <NavLink  to="/posts/pages/1">Posts</NavLink>

        <div className="navbar-nav flex-row">
          
          <NavLink  to="/cart/">Cart</NavLink>
          <SearchForm/>

        </div>
      </div>
    </nav>
  )
}
