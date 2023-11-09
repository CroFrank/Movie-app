"use client"

import { useSearchParams } from "next/navigation"
import { Genres } from "../_components/genres"
import Lists from "../_components/lists"
import { Movies } from "../_components/movies"
import { useEffect, useState } from "react"

interface Movie {
  title: string
  poster_path: string
  vote_average: string
  id: string
}

export default function Filter() {
  const [filter, setFilter] = useState<[Movie]>([
    { title: "", poster_path: "", vote_average: "", id: "" },
  ])

  const searchParams = useSearchParams()
  const search = searchParams.get("filter")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_PATH}api/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: search,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("No data was fetched")
        }
        return res.json()
      })
      .then((res) => {
        setFilter(res.results)
        return
      })
      .catch((error) => {
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-no-repeat md:bg-contain xl:bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container mx-auto p-4 bg-transparent pt-32">
        <div className="h-1/12 bg-red flex flex-col items-center gap-2 sm:flex-row justify-between mt-5">
          <Lists />
          <Genres />
        </div>
        <Movies movies={filter} />
      </div>
    </div>
  )
}
