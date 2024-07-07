import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../pages/SingleFilm';
import Films from '../pages/Films';

import { ROUTES } from "../router";
import Cart from '../pages/Cart';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Films />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
)

export default AppRoutes
