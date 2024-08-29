import React from 'react'
import '../Style/Footer.scss'
import SocialM from '../Component/SocialM'

export default function Footer(){
    return(
    <footer>
        <div className="footer_block">
            <h2 className="titre-reseaux">Réseaux Sociaux</h2>
            <SocialM/>
        </div>
        <div className="footer_block">
            <h2 className="titre-monsite">Mon site</h2>
            <a href="a-propos.html">À propos</a>
            <a href="Contact.html">Contact</a>
        </div>
    </footer>
    )
}