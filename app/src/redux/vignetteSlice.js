import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const vignetteSlice = createSlice({
  name: 'vignette',
  initialState,
  reducers: { },
})

// Action creators are generated for each case reducer function
export const {  } = vignetteSlice.actions

export default vignetteSlice.reducer