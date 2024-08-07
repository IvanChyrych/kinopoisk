import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestFilms, requestSearchFilms } from '../services/post'
import { IFilmsItem } from '../types/IFilmsItem'
import { useSelector } from 'react-redux'

let postsFavorites = []

//  const postsFavorites = localStorage.getItem("postsFavorites")

export interface FilmsState {
  list: IFilmsItem[],
  isLoading: boolean,
  favorites: IFilmsItem[],
  error: string | null | undefined,
  limit: number,
  pagesCount: string | null | undefined,
  sort: string
}

const initialState: FilmsState = {
  list: [],
  isLoading: false,
  favorites: [],
  error: null,
  limit: 10,
  pagesCount: null,
  sort: 'id'
}

export const fetchFilms = createAsyncThunk('post/fetchPosts', async (params = {}, { rejectWithValue }) => {
  try {
    const offset = (params.page - 1) * initialState.limit
    return await requestFilms({ limit: initialState.limit, offset, ...params })
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const fetchSearchPosts = createAsyncThunk('post/fetchPosts', async (params = {}, { rejectWithValue }) => {
  try {
    const offset = (params.page - 1) * initialState.limit
    return await requestSearchFilms({ limit: initialState.limit, ordering: initialState.sort, offset, ...params })
  } catch (e) {
    return rejectWithValue(e.message)
  }
})



export const postsSlice = createSlice({


  
  name: 'posts',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },

    toggleFavorite: (state, action) => {
      const postId = action.payload
      const post = state.list.find(post => post.id === postId)
      localStorage.setItem("postsFavorites", JSON.stringify(postsFavorites));
      console.log(typeof postsFavorites);

      postsFavorites.push(JSON.stringify(post))

      
      if (post) {
        const index = state.favorites.findIndex(favorite => favorite.id === postId)
        if (index === 1) {
          state.favorites.push(post)
          // localStorage.setItem("posts", JSON.stringify(post));
        } else {
          state.favorites.splice(index, 1)
        }
        post.isFavorite = !post.isFavorite
      }
    },

    changeSort: (state, action) => {
      state.sort = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = action.payload.docs.map(post => {
          return {
            ...post,
            likes: 0,
            dislikes: 0,
            isFavorite: false,
            isPopular: false
          }
        })
        state.pagesCount = Math.ceil(action.payload.pages / state.limit)
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { setActiveTab, toggleFavorite, changeSort } = postsSlice.actions
export const postsReducer = postsSlice.reducer
