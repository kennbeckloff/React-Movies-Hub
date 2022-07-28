import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
import NoMovies from "./NoMovies";

const MovieList = ({ searchTerm }) => {
  
  const { movies, loading,searchMovies } = useContext(MoviesContext);

  useEffect(() => {
    
    searchMovies(searchTerm);

  }, [searchTerm,searchMovies]);


const MovieList = () => {
  return (
    <div>MovieList</div>
  )
}

export default MovieList