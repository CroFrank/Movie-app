"use client"

import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

export default function Genre({ params }) {
  // const [slug] = params;
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA",
        },
      })
      .then((res) => {
        console.log(res)
        setMovieList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="home-container">
      <div className="genres">
        <h1>Here is a list of movie out in Theaters!</h1>
        <div className="genre-container">
          {movieList.map((movie, index) =>
            movie.genre_ids.includes(+params.slug) ? (
              <div className="genre-card" key={index}>
                <Link href={`/movie/${movie.original_title}`}>
                  {movie.original_title}
                </Link>
              </div>
            ) : (
              console.log("No movies found in this genre")
            )
          )}
        </div>
      </div>
    </div>
  )
}
