import React from 'react'
import styles from './tag.module.scss'

export default function Tag({tags}) {
  return (
    <>
    <div className={styles.tags}>
        {tags.map((tag, index)=> {
            return (
                <p key={index} className={styles.tag}>{tag}</p>
            )
        })}
    </div>
    </>
  )
}
