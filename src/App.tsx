import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.scss'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import AppRoutes from './routes/Routes'


import { getProducts } from './redux/filmsSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <div className="app ">
      <Header />
      <div className="d-flex flex-nowrap">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
