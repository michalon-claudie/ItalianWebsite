import React from 'react'
import imgFB from '../Images/imgFB.png'
import insta from '../Images/insta.png'

export default function Header() {
    return (
        <header>
            <div className='entete'>
                <div class="reseaux">
                    <img src={imgFB} alt='Facebook'/>
                    <img src={insta} alt='instagram'/>
                </div>
                <div className="mail">
                    <a href="MAILTO:clodiedie@hotmail.fr">Scrivimi</a>
                </div>
            </div>
            <div className="titre-principal">
                <h1><a href="Italie.html">L'italiano segreto</a></h1>
            </div>
    </header>
    )
}