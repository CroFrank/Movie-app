"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"

interface Genre {
  id: number
  name: string
}

export default function Genre() {
  const [genreList, setGenreList] = useState([])
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA",
        },
      })
      .then((res) => {
        setGenreList(res.data.genres)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="relative inline-block text-left ml-5">
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="bg-black border-2 border-red-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Movie Genre</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M8.293 11.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div
        className={
          isOpenMenu
            ? "origin-top-right absolute right-0 mt-2 w-inherit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ml-5 px-3 z-20"
            : "hidden"
        }
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {genreList.map((genre: Genre, index) => (
            <Link key={index} href={`/genre/${genre.id}`} className="block">
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
