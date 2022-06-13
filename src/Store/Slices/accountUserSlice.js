import { createSlice } from '@reduxjs/toolkit';

export const accountUserSlice = createSlice({
  name: 'accountUser',
  initialState: {
    myProfile: {},
  },
  reducers: {
    myProfile: (state, action) => {
      state.profile = {...state.myProfile, ...action.payload}
    },
  },
})

export const { myProfile } = accountUserSlice.actions

export default accountUserSlice.reducer