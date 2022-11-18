import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/a-propos">A Propos</Link>
            </li>
        </ul>
    </nav>
  )
}
