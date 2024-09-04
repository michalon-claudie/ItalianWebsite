import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
        },
        {
            href: "MAILTO:clodiedie@hotmail.fr",
            icon: faEnvelope,
            ariaLabel: 'Envoyer moi un mail'
        }
    ];

    return (
        <div className='flex'>
            <div className="flex gap-5">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        className={`w-3/12 transition-transform duration-500 hover:transform hover:-translate-y-1`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}><FontAwesomeIcon icon={link.icon} size="2x"/>
                    </a>
                ))}
            </div>
        </div>
    );
}
