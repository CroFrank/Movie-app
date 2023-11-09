import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const query = await req.text()
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${query}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `${process.env.MOVIE_API}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        mode: "cors",
      }
    )
    const resData = await res.json()
    return NextResponse.json(resData)
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
