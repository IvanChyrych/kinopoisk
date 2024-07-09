import { configureStore } from '@reduxjs/toolkit'
import { postPreviewReducer } from './film-preview-slice'
import { postsReducer } from './films-slice'
import { postReducer } from './film-slice'

export const store = configureStore({
  reducer: {
    postPreview: postPreviewReducer,
    posts: postsReducer,
    post: postReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch