import Lists from "@/app/_components/lists"
import { Genres } from "../../_components/genres"
import { Movies } from "@/app/_components/movies"

export default async function Genre({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.API_PATH}api/genre`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("No data was fetched")
      }
      return res.json()
    })
    .then((movie) => {
      return movie
    })
    .catch((error) => {
      console.log(error)
    })

  const filtered = res.results.filter((movie: any) =>
    movie.genre_ids.includes(+params.id)
  )

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
        {filtered.length < 1 ? (
          <p className="text-red-500 text-2xl text-center mt-7">
            No movies in that genre
          </p>
        ) : (
          <Movies movies={filtered} />
        )}
      </div>
    </div>
  )
}
