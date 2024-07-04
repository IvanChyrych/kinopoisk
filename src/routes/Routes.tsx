import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import SingleProduct from '../components/Films/SingleFilm';

import { ROUTES } from "../router";
import Cart from '../components/Cart/Cart';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
)

export default AppRoutes
