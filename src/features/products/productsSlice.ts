import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'

export const getProducts = createAsyncThunk('/products/getProducts', async (_, thuknAPI) => {

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




const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        // filtered: [],
        // related: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        }),
            builder.addCase(getProducts.fulfilled, (state, { payload }) => {
                state.list = payload,
                    state.isLoading = false
            }),
            builder.addCase(getProducts.rejected, (state) => {
                state.isLoading = false
            })
    }    
})

export default productsSlice.reducer
