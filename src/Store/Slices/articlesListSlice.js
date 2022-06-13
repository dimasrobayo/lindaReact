import { createSlice } from '@reduxjs/toolkit';

export const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: {
    articles: {},
  },
  reducers: {
    articlesList: (state, action) => {
      state.articles = {...state.articles, ...action.payload}
    },
    articlesRemove: (state) => {
      state.articles = {}
    },
  },
})

export const { articlesList, articlesRemove } = articlesListSlice.actions

export default articlesListSlice.reducer