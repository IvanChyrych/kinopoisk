import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter-slice'
import { postPreviewReducer } from './post-preview-slice'
import { langReducer } from './lang-slice'
import { postsReducer } from './posts-slice'
import { postReducer } from './post-slice'
import { authReducer, fetchRefreshJWT } from './auth-slice'
import { isTokenExpired } from '../utils/isTokenExpired'

let isRefreshing = false
const tokenExpirationMiddleware = (store) => (next) => (action) => {
  const state = store.getState()
  const currentToken = state.auth.jwt?.access

  if (currentToken && !isRefreshing && isTokenExpired(currentToken)) {
    isRefreshing = true
    store.dispatch(fetchRefreshJWT())
      .finally(() => { isRefreshing = false })
  }

  return next(action)
}

export const store = configureStore({
  reducer: {
    lang: langReducer,
    counter: counterReducer,
    postPreview: postPreviewReducer,
    posts: postsReducer,
    post: postReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenExpirationMiddleware)
})
