import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppRoutes from '../Routes/Routes'

import { getCategories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])


  return (
    <div className="app">
      <Header />
      <div className="container d-flex">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
