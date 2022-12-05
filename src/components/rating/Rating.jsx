import React from 'react'
import styles from './rating.module.scss'
import grayStar from '../../assets/gray-star.svg'
import pinkStar from '../../assets/pink-star.svg'

export default function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5] 
    
  return (
    <div className={styles.star}>
        {stars.map((star) => rating >= star ? <div key={star} className={styles['star-image']}><img  src={pinkStar} alt=""/></div> : <div key={star}><img src={grayStar} alt=""/></div>)
        }
    </div>
  )
}
