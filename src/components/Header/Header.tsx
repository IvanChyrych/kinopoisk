import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ROUTES } from '../../router'

import { FaSearch, FaHeart } from 'react-icons/fa'
import LOGO from '../../images/pixema.png'
import { useGetProductsQuery } from "../../redux/apiSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({ query: searchValue });

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);

  }

  return (
    <div >
      <div >
        <Link to={ROUTES.HOME}>
          <img src={LOGO} />
        </Link>
      </div>
      <div >
        <form >
          <div >
            <FaSearch />
          </div>
          <div >
            <input
              type="search"
              name='query'
              value={searchValue}
              autoComplete='off'
              onChange={handleSearch}
              placeholder='Search...' />
          </div>
          {searchValue && (
            <div >
              {data.docs.map(({ name, poster, id }) => {
                return (
                  <Link
                    key={id}
                    onClick={() => setSearchValue("")}
                    
                    to={`/products/${id}`}
                  >
                    <img width='50' src={poster?.url} alt="" />
                    <div >{name}</div>
                  </Link>
                );
              })}
            </div>
          )}
        </form>
        <div >
          <Link to={ROUTES.CART} >
            <FaHeart />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
