import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestPost } from '../services/post'

const initialState = {
  postBody: {},
  isLoading: false,
  error: null
}

export const fetchPost = createAsyncThunk('post/fetchPost', async (id, { rejectedWithValue }) => {
  try {
    const post = requestPost(id)
    return post
  } catch (e) {
    return rejectedWithValue(e.message)
  }
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removePostFromRedux: (state) => {
      state.postBody = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.postBody = action.payload
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { removePostFromRedux } = postSlice.actions
export const postReducer = postSlice.reducer
