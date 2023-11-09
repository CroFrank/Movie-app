import Image from "next/image"
import Link from "next/link"

interface Movie {
  movie: {
    title: string
    poster_path: string
    vote_average: string
    id: string
  }
}

export function Movie({ movie }: Movie) {
  return (
    <Link href={`/movie/${movie.id}`} className="w-48">
      <div className="relative rounded-sm h-72">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="movie poster image"
          className="w-48 h-72 rounded-sm"
          width={200}
          height={300}
        />
        <span className="absolute top-3 right-4 bg-black p-1 rounded-full text-white z-10">
          {parseFloat(movie.vote_average).toFixed(1)}
        </span>
      </div>
      <div className=" rounded-b-md h-20 bg-red-900 flex items-center justify-center text-white font-semibold">
        <p className="px-3 py-2 text-center">{movie.title}</p>
      </div>
    </Link>
  )
}
