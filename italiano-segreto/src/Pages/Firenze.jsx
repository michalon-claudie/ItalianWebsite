import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Naviguation from '../Component/Naviguation'
import Article from '../Component/Article'
import FirenzePicture from '../Images/firenze.jpg'
import Footer from '../Component/Footer'
import imageFirenzeBanner from '../Images/firenze2.jpg'

export default function Firenze() {
    return (
        <main>
            <Header/>
            <Banner imageUrl={imageFirenzeBanner} text="Firenze"/>
            <Naviguation/>
            <Article title="La sublime" picture={FirenzePicture} text="Florence c'est trop chouette"/>
            <Footer/>
        </main>
    )
}