import React, { useState } from 'react'
import accordionOpen from '../../assets/accordion-open.svg'
import accordionClosed from '../../assets/accordion-closed.svg'
import styles from './accordion.module.scss'

export default function Accordion({title, description}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordion}>
        <div onClick={() => setIsOpen(!isOpen)} className={styles['accordion-btn']}>
            <p className={styles['accordion-title']}>{title}</p>
            <div>
                <img src={isOpen ? accordionOpen : accordionClosed} alt="" className={styles['accordion-image']}/>
            </div>
        </div>
        { isOpen && <div className={styles['accordion-menu']}>
            <p className={styles['accordion-description']}>{description}</p>
        </div>}
    </div>
  )
}
