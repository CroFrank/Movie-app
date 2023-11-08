import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Image from "next/image"

export default async function SpecificMovie({ params }: Params) {
  const id = params

  const res = await fetch(`${process.env.API_PATH}api/movie`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: id.specificMovie,
  })
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

  return (
    <div
      className="min-h-screen bg-fixed bg-cover "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="pt-40 container mx-auto p-4 bg-transparent text-white flex flex-col justify-center sm:flex-row">
        <div className="bg-slate-800 rounded-md sm:w-2/3 md:flex md:flex-col md:justify-between">
          <div className="p-5 relative">
            <h1 className="text-red-600 text-3xl font-bold mb-5">
              {res.original_title}
            </h1>
            <h2 className="text-2xl mb-5">{res.tagline}</h2>
            <p className="mb-5">{res.overview}</p>

            <span className="absolute top-5 right-5 border-2 rounded-full p-1">
              {res.vote_average.toFixed(1)}
            </span>
          </div>
          <div className="p-5">
            <div className="flex justify-start">
              <span className="text-red-600 pr-4">Genres:</span>
              <ul className="flex justify-start">
                {res.genres.map((genre: { name: string }, index: number) => {
                  return (
                    <li key={index} className="text-yellow-500 pr-2">
                      {genre.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={`https://image.tmdb.org/t/p/w300/${res.poster_path}`}
            height={400}
            width={300}
            alt="movie image"
            className="w-10/12 sm:w-full"
          />
        </div>
      </div>
    </div>
  )
}
