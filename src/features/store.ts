import { configureStore } from '@reduxjs/toolkit'
import CategoriesSlice from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    Categories: CategoriesSlice
  }
})
