import React from 'react'
import { Link } from 'react-router-dom'
import  './Header.css';

export default function Header() {
  return (
    <>

    <header className='header'>
      <nav className='nav'>
        <ul className='list'>
          <li className="list-item"> <Link  to = "/">Home</Link>  </li>
          <li className="list-item"> <Link to ="/about">About</Link> </li>
          <li className="list-item"> <Link to = "/contacts" >Contacts</Link></li>
        </ul>
      </nav>
    </header>

   
    </>
  )
}
