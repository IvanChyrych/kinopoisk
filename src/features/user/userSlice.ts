import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    cart: [],
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {newCart.push({ ...payload });
    
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { addItemToCart, removeItemFromCart} =
  userSlice.actions;

export default userSlice.reducer;