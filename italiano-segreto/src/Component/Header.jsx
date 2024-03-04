import React from 'react'
import imgFB from '../Images/fb.jpg'
import insta from '../Images/insta.webp'
import '../Style/Header.scss'

export default function Header() {
    return (
        <header>
            <div className='entete'>
                <div className="reseaux">
                    <img src={imgFB} alt='Facebook'/>
                    <img src={insta} alt='instagram'/>
                </div>
                <div className="mail">
                    <a href="MAILTO:clodiedie@hotmail.fr">Scrivimi</a>
                </div>
            </div>
            <h1><a href="Italie.html">L'italiano segreto</a></h1>
    </header>
    )
}