import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-pink.svg'
import styles from './header.module.scss'

export default function Header() {
    const navLinkClassName = ({ isActive }) => `${(isActive ? styles.active : "")} ${styles['nav-element']}`;

  return (
    <header className={styles.header}>
        <img src={logo} alt="Le logo de Kasa" className={styles['header-logo']}/>
        <nav>
            <ul className={styles['header-nav']}>
                <li>
                {/* className={`icon-${size} ${navClass}`} */}
                    <NavLink to="/" className={navLinkClassName}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/a-propos" className={navLinkClassName}>A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

