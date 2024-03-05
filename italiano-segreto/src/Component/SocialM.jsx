import React from 'react'
import imgFB from '../Images/fb.jpg'
import insta from '../Images/insta.webp'
import linkdin from '../Images/linkdIn.webp'

export default function Social(){
    return(
        <div className='contact'>
            <div className="reseaux">
                <a href="https://www.instagram.com/ita.lie.per.tutti/?next=%2F" target="_blank" aria-label="lien vers facebook">
                    <img src={imgFB} alt='Facebook'/>
                </a>
                <a href="https://www.instagram.com/ita.lie.per.tutti/?next=%2F" target="_blank" aria-label="lien vers instagram">
                    <img src={insta} alt='instagram'/>
                </a>
                <a href="https://www.linkedin.com/in/claudie-michalon-8b1a0422a/" target="_blank" aria-label='lien vers LinkdIn'>
                    <img src={linkdin} alt='linkdIn'/>
                </a>
            </div>
            <div className="mail">
                <a href="MAILTO:clodiedie@hotmail.fr" aria-label='Envoyer moi un mail'>Scrivimi</a>
            </div>
        </div>
    )
}