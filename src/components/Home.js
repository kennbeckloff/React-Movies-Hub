import { MOVIES_API } from "../api/config";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { MoviesContext } from "../context/MoviesContext";

import Movie from "./Movie";
import Loader from "./Loader";
import { v4 as uuidv4 } from 'uuid';



const Home = () => {
  const { loading, setLoading} = useContext(MoviesContext)
  const [allMovies, setAllMovies] = useState([])
  useEffect(() =>
    axios.get(`${MOVIES_API}/popular`).then(res => {
      setAllMovies(res.data.results)
    }).catch(
      err => console.log(err)
    ),
    []
  )
  useEffect(() => {
    setLoading(false)
  }
  ) 

  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Popular Movies</h1>

            <div className="row">
              {loading ? <Loader /> : allMovies.map(movie => (
                <Movie key={uuidv4()} movie={movie} />
                      
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Home;