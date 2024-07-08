import { configureStore } from '@reduxjs/toolkit'
import { postPreviewReducer } from './post-preview-slice'
import { postsReducer } from './posts-slice'
import { postReducer } from './post-slice'

let isRefreshing = false
const tokenExpirationMiddleware = (store) => (next) => (action) => {
  const state = store.getState()


  return next(action)
}

export const store = configureStore({
  reducer: {
    postPreview: postPreviewReducer,
    posts: postsReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenExpirationMiddleware)
})
