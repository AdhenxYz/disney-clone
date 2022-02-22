import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : [],
    horroMovies: []
}

const MovieSlice = createSlice({
    name : "movie",
    initialState,
    reducers: {
        setMovies : (state, action) => {
            state.movies = action.payload;
        }    
    }
})

export const {setMovies} = MovieSlice.action;

export const selectMovies = state => state.movie.movies;

export default MovieSlice.reducer