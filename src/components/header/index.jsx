import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { UserPick } from './UserPick'
import { setLang } from '../../redux/lang-slice'
import { SearchForm } from '../searchForm/index'

export function Header () {
  const [langValue, setLangValue] = useState('en')
  // const user = useContext(UserContext)
  // const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLang(langValue))
  }, [langValue])

  const navLinkClass = ({ isActive }) => isActive ? 'nav-link active px-3' : 'nav-link px-3'

  const handleChangeLang = (event) => {
    setLangValue(event.target.value)
  }

  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">Blog</span>

        <div className="navbar-nav flex-row">
          {/* <NavLink className={navLinkClass} to="/posts/new">Add post</NavLink> */}
          {/* <NavLink className={navLinkClass} to="/posts/my">My posts</NavLink> */}
          <NavLink className={navLinkClass} to="/posts/pages/1">Posts</NavLink>
          {/* <NavLink className={navLinkClass} to="/auth/signin">Sign&nbsp;In</NavLink> */}
          <div className="ms-5"></div>
          {/* <NavLink className={navLinkClass} to="/auth/signup">Sign&nbsp;Up</NavLink> */}
          <SearchForm/>

          {/* <select className="form-select ms-5" value={langValue} onChange={handleChangeLang}>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select> */}
        </div>
      </div>
    </nav>
  )
}
