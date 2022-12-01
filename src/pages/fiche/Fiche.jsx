import React from 'react'
import { useParams } from 'react-router-dom';
import Accordion from '../../components/accordion/Accordion'
import styles from './fiche.module.scss'
import ListeLogements from '../../data/logements.json'
import Carousel from '../../components/carousel/Carousel';


export default function Fiche() {
  const { id } = useParams();
  const logement = ListeLogements.find((logement) => logement.id === id);
  return (
    <div>
      <Carousel slides={logement.pictures}/>
      <div>
        <div>
          <p>{logement.title}</p>
          <p>{logement.location}</p>
        </div>
        <div>
          <p></p>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>tag</div>
        <div>etoile</div>
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


