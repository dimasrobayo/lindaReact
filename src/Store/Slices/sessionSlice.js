import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    value: false,
  },
  reducers: {
    auth: (state) => {
      state.value = true
    },
    noAuth: (state) => {
      state.value = false
    },
  },
})

export const { auth, noAuth } = sessionSlice.actions

export default sessionSlice.reducer