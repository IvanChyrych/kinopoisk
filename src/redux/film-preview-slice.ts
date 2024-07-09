import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentImage: '',
  isShown: false
}

export const filmPreviewSlice = createSlice({
  name: 'postPreview',
  initialState,
  reducers: {
    setPostPreview: (state, action) => {
      state.currentImage = action.payload
    },
    showModal: (state) => {
      state.isShown = true
    },
    hideModal: (state) => {
      state.isShown = false
    }
  }
}
)

export const { setPostPreview, showModal, hideModal } = filmPreviewSlice.actions
export const postPreviewReducer = filmPreviewSlice.reducer
