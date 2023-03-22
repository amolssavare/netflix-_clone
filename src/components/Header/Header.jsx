import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Header/logo2.png"
import { BsSearchHeartFill } from 'react-icons/bs';

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="logo"/>
      <div>

        <Link to="#upcoming">Tv Shows</Link>
        <Link to="/live">Movies</Link>
        <Link to="/live">Recently added</Link>
        <Link to="/kidsfav">My List</Link>

      </div>
      <BsSearchHeartFill/>
    </nav>
  )
}

export default Header
