import { FEATURED_API } from "../api/config";
import React, {  useContext ,useEffect} from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";

const Popular = () => {
  return (
    <div>Popular</div>
  )
}

export default Popular