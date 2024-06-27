import React from 'react'
import Products from '../Products/Products'

import { useSelector } from 'react-redux'

const Home = () => {

  const { products } = useSelector((state) => state)
  
  return (
    <>
      <Products />
    </>
  )
}

export default Home
