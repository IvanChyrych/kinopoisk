import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestSignUp, requestSignIn, requestActivation, requestRefreshJWT } from '../services/auth'
import { setAccessTokenClient } from '../api/client'
import { getJWTFromLocalStorage } from '../utils/getJWTFromLocalStorage'
import { setJWTToLocalStorage } from '../utils/setJWTToLocalStorage'

export const fetchSignUp = createAsyncThunk('auth/fetchSignUp', async (data, { rejectWithValue }) => {
  try {
    return await requestSignUp(data)
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const fetchSignIn = createAsyncThunk('auth/fetchSignIn', async (data, { rejectWithValue }) => {
  try {
    const jwtToken = await requestSignIn(data)
    setJWTToLocalStorage(jwtToken)
    setAccessTokenClient(jwtToken.access)

    return jwtToken
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const fetchActivation = createAsyncThunk('auth/fetchActivation', async (data, { rejectWithValue }) => {
  try {
    return await requestActivation(data)
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const fetchRefreshJWT = createAsyncThunk('auth/fetchRefreshJWT', async (_, { rejectWithValue, getState }) => {
  try {
    const refreshToken = getState().auth.jwt?.refresh

    if (!refreshToken) {
      throw new Error('No refresh token')
    }

    const accessToken = await requestRefreshJWT(refreshToken)
    const newJWT = {
      refresh: refreshToken,
      access: accessToken
    }
    setJWTToLocalStorage(newJWT)
    setAccessTokenClient(accessToken)

    return newJWT
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

const initialState = {
  error: null,
  isLoading: false,
  activationStatus: false,
  jwt: getJWTFromLocalStorage,
  currentUser: null
}

setAccessTokenClient(initialState.jwt?.access)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchActivation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchActivation.fulfilled, (state, action) => {
        state.isLoading = false
        state.activationStatus = true
      })
      .addCase(fetchActivation.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.jwt = action.payload
      })
      .addCase(fetchRefreshJWT.fulfilled, (state, action) => {
        state.isLoading = false
        state.jwt = action.payload
      })
  }
})

export const authReducer = authSlice.reducer
