import { FEATURED_API } from "../api/config";
import React, {  useContext ,useEffect} from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";

const  Popular =() =>  {
  const {movies,setMovies , loading , setLoading } = useContext(MoviesContext)  
  useEffect(() => {      
      getMovies(FEATURED_API)    
  });

export default Popular