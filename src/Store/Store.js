import { configureStore } from '@reduxjs/toolkit';
import articlesListReducer from './Slices/articlesListSlice';

export default configureStore({
  reducer: {
    articlesList: articlesListReducer,
  }
})