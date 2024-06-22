import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";
// import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/v1.4/movie?page=1&limit=10`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '0JPEDBY-CM3MRJQ-NDMR0N1-FW6Q5R1'
                }
            });
            return res.data;
           
            
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const productsSlice = createSlice({
    name: "Products",
    initialState: {
        list: null,
        filtered: [],
        related: [],
        isLoading: false,
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload);
        },
        getRelatedProducts: (state, { payload }) => {
            const list = state.list.filter(({ category: { id } }) => id === payload);
            //   state.related = shuffle(list);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
          
            
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;