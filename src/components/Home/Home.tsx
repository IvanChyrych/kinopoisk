import React from 'react'
import Poster from '../Poster/Poster'
import Categories from '../Categories/Categories'
import { useSelector } from 'react-redux'

const Home = () => {

  const { categories } = useSelector(( state ) => state)

  return (
    <>
      <Poster />
      <Categories  amount={5} title='Films'/>
    </>

  )
}

export default Home
