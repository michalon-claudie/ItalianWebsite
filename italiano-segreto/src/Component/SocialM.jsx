import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Social() {

    const socialLinks = [
        {
            href: "https://www.instagram.com/ita.lie.per.tutti/?next=%2F",
            icon: faFacebook,
            ariaLabel: "link facebook"
        },
        {
            href: "https://www.instagram.com/ita.lie.per.tutti/?next=%2F",
            icon: faInstagram,
            ariaLabel: "link instagram"
        },
        {
            href: "https://www.linkedin.com/in/claudie-michalon-8b1a0422a/",
            icon: faLinkedin,
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
                        aria-label={link.ariaLabel}><FontAwesomeIcon icon={link.icon} size="2x"/>
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
