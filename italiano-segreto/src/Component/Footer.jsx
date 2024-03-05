import React from 'react'
import '../Style/Footer.scss'

export default function Footer(){
    return(
    <footer>
        <div className="footer_block">
            <h2 className="titre-reseaux">Réseaux Sociaux</h2>
                <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                <a target="_blank" href="https://www.facebook.com/">Facebook</a>
                <a target="_blank" href="https://www.twitter.com/">Twitter</a>
                <a target="_blank" href="https://www.linkedin.com/">Linkedin</a>
        </div>
        <div className="footer_block">
            <h2 className="titre-monsite">Mon site</h2>
            <a href="a-propos.html">À propos</a>
            <a href="Contact.html">Contact</a>
        </div>
        <div className="footer_block">
            <h2 className="titre-quisuisje">Qui suis-je ?</h2>
            <p>Anciennement infirmière, je me reconvertie dans un métier du web.
            C'est grace à mes voyages et notamment à mon immersion en Italie que j'ai réussi à m'épanouir.</p>
        </div>
    </footer>
    )
}