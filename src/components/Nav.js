import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
        <h3>Navigation</h3>
        <ul>
          <li><Link className="App-link" to="/">Home Page</Link></li>
          <li><Link className="App-link" to="/shop">Shop Page</Link></li>
          <li><Link className="App-link" to="/about">About Page</Link></li>
        </ul>
    </div>
  )
}

export default Nav
