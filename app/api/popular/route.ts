import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          Authorization: `${process.env.MOVIE_API}`,
        },
      }
    )
    const resData = await res.json()
    return NextResponse.json(resData)
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
