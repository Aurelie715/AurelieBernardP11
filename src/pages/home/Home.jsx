import React from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import ListeLogements from '../../data/logements.json'
import styles from './home.module.scss'
import BannerImg from "../../assets/banner-home.jpg"

export default function Home() {
  return (
    <>
      <Banner img={BannerImg} text="Chez vous, partout et ailleurs"/>
      <div className={styles['card-container']}>
        {ListeLogements.map(({id, cover, title}) => {
          return (
            <Card key={id} id={id} cover={cover} title={title}/>
          )
        })}
      </div>
      
    </>
  )
}
