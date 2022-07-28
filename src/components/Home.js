import { MOVIES_API } from "../api/config";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { MoviesContext } from "../context/MoviesContext";

import Movie from "./Movie";
import Loader from "./Loader";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home