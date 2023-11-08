"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Lists() {
  const [topRated, setTopRated] = useState([])
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA",
          },
        }
      )
      .then((res) => {
        setTopRated(res.data.genres)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className="text-white flex">
      <button className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 rounded-l inline-flex items-center">
        Popular
      </button>
      <button className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 inline-flex items-center">
        Top Rated
      </button>
      <button className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 rounded-r inline-flex items-center">
        Upcoming
      </button>
    </div>
  )
}
