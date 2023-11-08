"use client"

import { useEffect, useState } from "react"
import { Movie } from "./movie"

interface Movie {
  title: string
  poster_path: string
  vote_average: string
  id: string
}

export function Movies() {
  const [popularList, setPopularList] = useState([])

  useEffect(() => {
    fetch("api/popular")
      .then((res) => {
        return res.json()
      })
      .then((popular) => {
        console.log(popular)
        setPopularList(popular.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
      {popularList.map((movie: Movie, index) => {
        return <Movie key={index} movie={movie} />
      })}
    </div>
  )
}
