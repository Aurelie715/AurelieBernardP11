import React from 'react'
import { useState } from 'react'
import next from '../../assets/next-arrow.svg'
import previous from '../../assets/previous-arrow.svg'
import styles from './carousel.module.scss'

export default function Carousel({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextImage = () => {
        const lastSlide = currentIndex === slides.length -1;
        const newIndex = lastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }
    const previousImage = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const currentSlide = slides[currentIndex];
    const numberOfSlides = slides.length;
    const slideNumber = currentIndex +1;
  return (
    <div className={styles.carousel}>
        <img src={currentSlide} alt="" className={styles['carousel-image']}/>
        <div className={styles.arrow}>
            <div onClick={previousImage} className={styles['arrow-previous']}>
                <img src={previous} alt="" className={styles['arrow-image']}/>
            </div>
            <div onClick={nextImage} className={styles['arrow-next']}>
                <img src={next} alt="" className={styles['arrow-image']} />
            </div>
        </div>
        <div className={styles.number}>
            <p>{slideNumber}/{numberOfSlides}</p>
        </div>
    </div>
  )
}
