import React from 'react'
import Marquee from "react-fast-marquee";

const HeaderMovies = ({ movies }) => {
  return (
    <Marquee speed={35} gradient={false} className="h-60">
      {movies && movies.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title || "movie poster"}
          className="h-52 mx-3 rounded-xl object-cover"
        />
      ))}
    </Marquee>
  )
}

export default HeaderMovies
