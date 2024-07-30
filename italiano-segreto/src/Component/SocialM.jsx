import React from 'react'
import imgFB from '../Images/fb.jpg'
import insta from '../Images/insta.webp'
import linkdin from '../Images/linkdIn.webp'

export default function Social(){
    return(
        <div className='flex flex-row items-center justify-between m-5'>
            <div className="flex gap-px md:gap-4">
                <a className= "w-[4%] md:w-[7%] transition-transform duration-500 hover:transform hover:-translate-y-1" href="https://www.instagram.com/ita.lie.per.tutti/?next=%2F" target="_blank" aria-label="lien vers facebook">
                    <img className='w-full'src={imgFB} alt='Facebook'/>
                </a>
                <a className= "w-[4%] md:w-[7%] transition-transform duration-500 hover:transform hover:-translate-y-1" href="https://www.instagram.com/ita.lie.per.tutti/?next=%2F" target="_blank" aria-label="lien vers instagram">
                    <img className='w-full'src={insta} alt='instagram'/>
                </a>
                <a className= "w-[4%] md:w-[7%] transition-transform duration-500 hover:transform hover:-translate-y-1" href="https://www.linkedin.com/in/claudie-michalon-8b1a0422a/" target="_blank" aria-label='lien vers LinkdIn'>
                    <img className='w-full'src={linkdin} alt='linkdIn'/>
                </a>
            </div>
            <div className="mail">
                <a className= "transition-transform duration-500 hover:transform hover:-translate-y-1" href="MAILTO:clodiedie@hotmail.fr" aria-label='Envoyer moi un mail'>Scrivimi</a>
            </div>
        </div>
    )
}