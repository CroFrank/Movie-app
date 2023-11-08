import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const id = await req.text()
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
