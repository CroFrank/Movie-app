import Lists from "@/app/_components/lists"
import { Movie } from "@/app/_components/movie"
import { Genres } from "../../_components/genres"

// export default function Genre({ params }) {
//   const [movieList, setMovieList] = useState([])

//   useEffect(() => {
//     axios
//       .get("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY0N2RlOGJjOTdiNDQzMDJhMzQ4M2IzNzY0YzczMSIsInN1YiI6IjY1NDBmMjA2MzNhNTMzMDBhYzFlZWZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kFuR0q-353Vtm_1STC9oXfZDT_qi8wanHsURC3edtA",
//         },
//       })
//       .then((res) => {
//         console.log(res)
//         setMovieList(res.data.results)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   return (
//     <div className="home-container">
//       <div className="genres">
//         <h1>Here is a list of movie out in Theaters!</h1>
//         <div className="genre-container">
//           {movieList.map((movie, index) =>
//             movie.genre_ids.includes(+params.slug) ? (
//               <div className="genre-card" key={index}>
//                 <Link href={`/movie/${movie.original_title}`}>
//                   {movie.original_title}
//                 </Link>
//               </div>
//             ) : (
//               console.log("No movies found in this genre")
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
interface Movie {
  title: string
  poster_path: string
  vote_average: string
  id: string
}

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
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
          {filtered.length < 1 ? (
            <p className="text-red-500 text-2xl text-center">
              No movies in that genre
            </p>
          ) : (
            filtered.map((movie: Movie, index: number) => {
              return <Movie key={index} movie={movie} />
            })
          )}
        </div>
      </div>
    </div>
  )
}
