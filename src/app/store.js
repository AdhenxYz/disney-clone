import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from '../features/Movie/MovieSlice'
import userSlice from '../features/User/userSlice'

export const store = configureStore({
  reducer: {
   movie : MovieReducer,
   user : userSlice,
  },
});
