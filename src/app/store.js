import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from '../features/Movie/MovieSlice'
export const store = configureStore({
  reducer: {
   movie : MovieReducer,
  },
});
