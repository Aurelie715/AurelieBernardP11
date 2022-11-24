import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './error.module.scss'

export default function Error() {
  return (
    <>
    <h1 className={styles['error-number']}>404</h1>
    <p className={styles['error-text']}>Oups ! La page que vous demandez n'existe pas.</p>
    <NavLink to="/" className={styles['error-link']}>Retourner sur la page d'accueil</NavLink>
    </>
  )
}
