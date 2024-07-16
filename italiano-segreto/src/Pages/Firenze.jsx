import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Naviguation from '../Component/Naviguation'
import Files from '../Component/Files'
import Footer from '../Component/Footer'

export default function Firenze() {
    return (
        <main>
            <Header/>
            <Banner text="Firenze"/>
            <Naviguation/>
            <Files/>
            <Footer/>
        </main>
    )
}