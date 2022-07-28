import { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
import { apiKey } from "../api/config";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const MyFavorites = () => {
    const { myfavorites ,loading,setLoading} = useContext(MoviesContext)
    const [favoriList, setFavoriList] = useState([])    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        getMovie()
    }, [setLoading])
  return (
    <div>MyFavorites</div>
  )
}

export default MyFavorites