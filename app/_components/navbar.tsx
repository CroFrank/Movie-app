"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 p-5 z-50 w-full  ${
        scrolling ? "bg-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-4xl my-3">
            Movies
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}
