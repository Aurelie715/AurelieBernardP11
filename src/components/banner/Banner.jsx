import React from 'react'
import styles from './banner.module.scss'

export default function Banner({img, text, className}) {
  // if (a && b) {}
  return (
    <div className={`${styles.banner} ${className}`}>
      <img src={img} alt="" className={styles['banner-image']}/>
      {text ? <p className={styles['banner-text']}>{text}</p> : null}
    </div>
  )
}
