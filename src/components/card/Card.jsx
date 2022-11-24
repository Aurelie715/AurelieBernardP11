import React from 'react'
import styles from './card.module.scss'

export default function Card({id, cover, title}) {
  return (
        <article id={id} className={styles.card}>
            <img src={cover} alt="" className={styles['card-image']}/>
            <h2 className={styles['card-title']}>{title}</h2>
        </article>
  )
}
