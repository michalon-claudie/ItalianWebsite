import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Naviguation from '../Component/Naviguation'
import Footer from '../Component/Footer'

export default function Italiano() {
    return (
        <main>
            <Header/>
            <Banner text="Benvenuto"/>
            <Naviguation/>
            <Banner text="Italie"/>
            <Footer/>
        </main>
    )
}