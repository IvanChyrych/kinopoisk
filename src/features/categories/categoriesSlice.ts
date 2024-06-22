import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'

export const getCategories = createAsyncThunk('/Categories/getCategories', async (_, thuknAPI) => {

    try {
        const res = await axios(`${BASE_URL}/v1/movie/possible-values-by-field?field=genres.name`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '0JPEDBY-CM3MRJQ-NDMR0N1-FW6Q5R1'
            }
        })
        return res.data

    } catch (err) {
        console.log(err)
        return thuknAPI.rejectWithValue(err)
    }
})




const categoriesSlice = createSlice({
    name: 'Categories',
    initialState: {
        list: [],
        // filtered: [],
        // related: [],
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
