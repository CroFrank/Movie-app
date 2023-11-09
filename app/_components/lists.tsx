import Link from "next/link"

export default function Lists() {
  return (
    <div className="text-white flex">
      <Link
        href="/"
        className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 rounded-l inline-flex items-center"
      >
        Popular
      </Link>
      <Link
        href={{
          pathname: "/filter",
          query: { filter: "top_rated" },
        }}
        className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 inline-flex items-center"
      >
        Top Rated
      </Link>
      <Link
        href={{
          pathname: "/filter",
          query: { filter: "upcoming" },
        }}
        className="bg-black border-2 border-red-900 text-white font-semibold py-2 px-4 rounded-r inline-flex items-center"
      >
        Upcoming
      </Link>
    </div>
  )
}
