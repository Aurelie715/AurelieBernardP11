import React from 'react'
import styles from './banner.module.scss'

export default function Banner({img, text}) {
  // if (a && b) {}
  return (
    <div className={styles.banner}>
      <img src={img} alt="" className={styles['banner-image']}/>
      {text && <p className={styles['banner-text']}>{text}</p>}
    </div>
  )
}
