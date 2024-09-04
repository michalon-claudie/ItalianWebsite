import React from 'react'
import SocialM from '../Component/SocialM'

export default function Footer(){
    return(
    <footer className='flex flex-col justify-center items-center bg-customPurple'>
        <div className="flex flex-col items-center text-center p-2.5 w-4/5">
            <h2 className="text-4xl">Réseaux Sociaux</h2>
            <SocialM/>
        </div>
        <div className='flex flex-col justify-center items-center bg-customPurple'>
            <h2 className="text-4xl">Mon site</h2>
            <a className="text-2xl" href="a-propos.html">À propos</a>
            <a className="text-2xl" href="Contact.html">Contact</a>
        </div>
    </footer>
    )
}