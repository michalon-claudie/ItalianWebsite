import React from 'react';
import imgFB from '../Images/fb.jpg';
import insta from '../Images/insta.webp';
import linkdin from '../Images/linkdIn.webp';

export default function Social() {

    const socialLinks = [
        {
            href: "https://www.instagram.com/ita.lie.per.tutti/?next=%2F",
            imgSrc: imgFB,
            alt: "Facebook",
            ariaLabel: "link facebook"
        },
        {
            href: "https://www.instagram.com/ita.lie.per.tutti/?next=%2F",
            imgSrc: insta,
            alt: "Instagram",
            ariaLabel: "link instagram"
        },
        {
            href: "https://www.linkedin.com/in/claudie-michalon-8b1a0422a/",
            imgSrc: linkdin,
            alt: "LinkedIn",
            ariaLabel: "link LinkedIn"
        }
    ];

    return (
        <div className='flex flex-row items-center justify-between m-5'>
            <div className="flex gap-px md:gap-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        className={`w-3/12 md:w-[7%] transition-transform duration-500 hover:transform hover:-translate-y-1`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}><img className='w-full' src={link.imgSrc} alt={link.alt} />
                    </a>
                ))}
            </div>
            <div className="mail">
                <a className="transition-transform duration-500 hover:transform hover:-translate-y-1"
                    href="MAILTO:clodiedie@hotmail.fr"
                    aria-label='Envoyer moi un mail'>Scrivimi</a>
            </div>
        </div>
    );
}
