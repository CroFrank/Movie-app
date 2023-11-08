import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US`,
      {
        headers: {
          Authorization: `${process.env.MOVIE_API}`,
        },
      }
    )
    const resData = await res.json()
    console.log(resData)
    return NextResponse.json(resData)
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
