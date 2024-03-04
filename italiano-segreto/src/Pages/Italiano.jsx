import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Footer from '../Component/Footer'

export default function Italiano() {
    return (
        <main>
            <Header/>
            <Banner text="Benvenuto"/>
            <Banner text="Italie"/>
            <Footer/>
        </main>
    )
}