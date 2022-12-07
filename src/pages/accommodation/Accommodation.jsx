import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import Accordion from '../../components/accordion/Accordion'
import styles from './accommodation.module.scss'
import ListeLogements from '../../data/logements.json'
import Carousel from '../../components/carousel/Carousel';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating'


export default function Accommodation() {
  const { id } = useParams();
  const logement = ListeLogements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/error/404" replace={true} />
  }
  return (
    <div>
      <Carousel slides={logement.pictures}/>
      <div className={styles.heading}>
        <div className={styles['heading-logement']}>
          <h1 className={styles['logement-title']}>{logement.title}</h1>
          <p className={styles['logement-location']}>{logement.location}</p>
          <Tag tags={logement.tags} />
        </div>
        <div className={styles['heading-host']}>
          <div className={styles['host-info']}>
            <p className={styles['host-name']}>{logement.host.name}</p>
            <div className={styles['host-picture']}>
              <img src={logement.host.picture} alt=""/>
            </div>
          </div>
          <div className={styles['host-rating']}>
            <Rating rating={logement.rating}/>
          </div>
        </div>
      </div>
      
      <div className={styles['container-accordions']}>
        <div className={styles['container-accordion']}>
          <Accordion title="Description" description={logement.description}/>
        </div>
        <div className={styles['container-accordion']}>
          <Accordion title="Equipements"/>
        </div>
      </div>
    </div>
  )
}


