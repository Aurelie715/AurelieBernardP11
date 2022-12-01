import React from 'react'
import logo from '../../assets/logo-white.svg'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Le logo de Kasa" className={styles['footer-logo']}/>
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
