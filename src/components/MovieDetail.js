import React from 'react'
import { IMAGES_API } from "../api/config";

import StarRating from "./StarRating";
const MovieDetail = ({ title, release_date, poster_path, overview, vote_average ,vote_count }) => {

    return (
        <div className="movie_detail">
            <section>
                <img src={poster_path ? IMAGES_API + poster_path : "https://unsplash.com/photos/PIlB7BQo5bg"} alt={title} />           </section>


            <section>
                <div className="movie_title">
                    {title}
                </div>
                <div className="movie_overview">
                    {overview}
                </div>
                {
                    release_date ? <div className="movie_releaseDate mb-2">
                        <b>Release Date : </b>
                        <span>{release_date}
                        </span>
                    </div> 
                    : null
                }
                <div className="Vote_info">

                    <div className="mb-1">

                        <b>Vote Count : </b>
                        <span>{vote_count}</span>
                    </div>
                    <div className="vote_averageField">                    
                        <div>
                            <b>Vote Average : </b>
                            <span>
                                {vote_average}
                            </span>
                        </div>
                    <div>
                        <StarRating rate={vote_average} />
                    </div>                       
                        </div>                  
                    </div>
            </section>
        </div>
    )}

export default MovieDetail;