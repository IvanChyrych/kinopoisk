import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './filmsSlice'
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    Products: productsSlice,
    // user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
})
