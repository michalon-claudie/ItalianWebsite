import React from 'react'
import '../Style/style.css'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Naviguation from '../Component/Naviguation'
import About from '../Component/About'
import Footer from '../Component/Footer'

export default function Italiano() {
    return (
        <main>
            <Header/>
            <Banner text="Benvenuto"/>
            <Naviguation/>
            <About
                title="Pourquoi ce site ?"
                content="Amoureuse de l'Italie depuis toujours, 
                j'ai voulu créer un endroit où je pourrais parler de ce pays qui m'inspire tant.
                 La culture, la nature, les villes, la nourriture, les habitants .. 
                 Tout est inspirant dans ce pays chaleureux. 
                 C'est lors d'un travail, en tant que jeune fille AUPAIR que je me suis vraiment immergée dans ce pays. 
                 Lorsque vous n'êtes pas dans votre pays d'origine, toutes les règles changent. 
                 Votre œil est neuf et votre esprit doit être vif pour apprendre, découvrir, s'émerveiller et rencontrer.
                  Mais assez parlé de moi, je vous laisse découvrir le site et les informations qui vous intéressent sur le pays."
            />
            <Banner text="MICHALON Claudie copyright 2024"/>
            <Footer/>
        </main>
    )
}