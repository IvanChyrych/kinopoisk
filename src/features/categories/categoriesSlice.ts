import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'

export const getCategories = createAsyncThunk('/categories/getCategories', async (_, thuknAPI) => {
  
  try {
    const res = await axios(`${BASE_URL}/movie/possible-values-by-field?field=genres.name`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'QPVT2B0-R1F4QG4-JZRSDBM-2FPDWCJ'
      }
    })
    return res.data
    
  } catch (err) {
    console.log(err)
    return thuknAPI.rejectWithValue(err)
  }
})

console.log(getCategories());


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getCategories.fulfilled, (state, { payload }) => {
        state.list = payload,
          state.isLoading = false
      }),
      builder.addCase(getCategories.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export default categoriesSlice.reducer
