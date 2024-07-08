import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestPosts,  requestSearchPosts } from '../services/post'

const initialState = {
  list: [],
  isLoading: false,
  favorites: [],
  popular: [],
  activeTab: 'All',
  error: null,
  limit: 10,
  pagesCount: null,
  sort: 'id'

}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (params = {}, { rejectWithValue }) => {
  try {
    const offset = (params.page - 1) * initialState.limit
    return await requestPosts({ limit: initialState.limit, offset, ...params })
  } catch (e) {
    return rejectWithValue(e.message)
  }
})


export const fetchSearchPosts = createAsyncThunk('post/fetchPosts', async (params = {}, { rejectWithValue }) => {
  try {
    const offset = (params.page - 1) * initialState.limit
    return await requestSearchPosts({ limit: initialState.limit, ordering: initialState.sort, offset, ...params })
  } catch (e) {
    return rejectWithValue(e.message)
  }
})


export const fetchMyPosts = createAsyncThunk('post/fetchMyPosts', async (_, { rejectedWithValue }) => {
  try {
    const post = await requestMyPosts({ limit: 15 })
    return post
  } catch (e) {
    return rejectedWithValue(e.message)
  }
})

export const fetchCreatePost = createAsyncThunk('posts/fetchCreatePost', async (formData, { rejectWithValue }) => {
  try {
    return await requestCreatePost(formData)
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

    incrementLikes: (state, action) => {
      const postId = action.payload
      const post = state.list.find(post => post.id === postId)
      if (post) {
        post.likes += 1
      }
    },

    decrementLikes: (state, action) => {
      const postId = action.payload
      const post = state.list.find(post => post.id === postId)
      if (post) {
        post.dislikes += 1
      }
    },

    toggleFavorite: (state, action) => {
      const postId = action.payload
      const post = state.list.find(post => post.id === postId)
      if (post) {
        const index = state.favorites.findIndex(favorite => favorite.id === postId)
        if (index === -1) {
          state.favorites.push(post)
        } else {
          state.favorites.splice(index, 1)
        }
        post.isFavorite = !post.isFavorite
      }
    },

    togglePopular: (state, action) => {
      const postId = action.payload
      const post = state.list.find(post => post.id === postId)
      if (post && post.likes > 5) {
        const index = state.popular.findIndex(popular => popular.id === postId)
        if (index === -1) {
          state.popular.push(post)
        } else {
          state.popular.splice(index, 1)
        }
        post.isPopular = !post.isPopular
      }
    },
    changeSort: (state, action) => {
      state.sort = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
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
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchMyPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMyPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = action.payload
      })
  }
})

export const { setActiveTab, incrementLikes, decrementLikes, toggleFavorite, togglePopular, changeSort } = postsSlice.actions
export const postsReducer = postsSlice.reducer
