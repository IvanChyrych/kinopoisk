import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestFilm } from '../services/post'

const initialState = {
  postBody: {},
  isLoading: false,
  error: null
}

export const fetchFilm = createAsyncThunk('post/fetchFilm', async (id, { rejectedWithValue }) => {
  try {
    const post = requestFilm(id)
    return post
  } catch (e) {
    return rejectedWithValue(e.message)
  }
})

const filmSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removePostFromRedux: (state) => {
      state.postBody = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.isLoading = false
        state.postBody = action.payload
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { removePostFromRedux } = filmSlice.actions
export const postReducer = filmSlice.reducer
