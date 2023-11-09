import { Movie } from "./movie"

interface Movie {
  title: string
  poster_path: string
  vote_average: string
  id: string
}

export function Movies({ movies }: { movies: [Movie] }) {
  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
      {movies.map((movie: Movie, index) => {
        return <Movie key={index} movie={movie} />
      })}
    </div>
  )
}
