import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Naviguation from '../Component/Naviguation'
import Article from '../Component/Article'
import FirenzePicture from '../Images/firenze.jpg'
import Footer from '../Component/Footer'

export default function Firenze() {
    return (
        <main>
            <Header/>
            <Banner text="Firenze"/>
            <Naviguation/>
            <Article title="La sublime" picture={FirenzePicture} text="Florence c'est trop chouette"/>
            <Footer/>
        </main>
    )
}