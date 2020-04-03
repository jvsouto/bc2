import React, { useState } from 'react'
import Nav from '../components/Nav'

const Shop = () => {
  // const [movies, setMovies] = useState([
  //     {
  //       id: 42,
  //       name: "Harry Potter"
  //     },
  //     {
  //       id: 666,
  //       name: "Party Hard"
  //     },
  //     {
  //       id: 9,
  //       name: "Exorcism"
  //     }
  // ])

  return (
    <div>

        <h1>Shap page</h1>
        <Nav />
        <h2>Movies</h2>
        <ul>
        {/* { movies.map(movie => {
            // eslint-disable-next-line no-unused-expressions
            <li>{movie.name}</li>
          })
} */}
        </ul>
    </div>
  )
}

export default Shop
