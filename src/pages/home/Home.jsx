import React from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import ListeLogements from '../../data/logements.json'
import styles from './home.module.scss'
import BannerImg from "../../assets/banner-home.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Banner img={BannerImg} text="Chez vous, partout et ailleurs" className="banner-home"/>
      <div className={styles['card-container']}>
        {ListeLogements.map(({id, cover, title}) => {
          return (
            <Link key={id} to={`/accommodation/${id}`}><Card id={id} cover={cover} title={title}/></Link>
          )
        })}
      </div>
      
    </>
  )
}
