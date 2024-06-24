import React from 'react'
import Poster from '../Poster/Poster'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'

import { useSelector } from 'react-redux'

const Home = () => {
  
  const { categories } = useSelector((state) => state)
  const { products } = useSelector((state) => state)


  return (
    <>
      {/* <Poster /> */}
      <Categories amount={5} title='Categories' />
      <Products  title='Films'/>
    </>

  )
}

export default Home
