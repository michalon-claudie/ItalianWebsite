import React, { useState, useEffect } from 'react'
import '../Style/About.scss'

export default function About({title,content}){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const para = document.querySelector('.para');
            if (para) {
                const paraTop = para.offsetTop;
                const windowHeight = window.innerHeight;
                if (window.pageYOffset > paraTop - windowHeight + 400) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
    <div className='about' id="about">
        <h2 className="about_title">{title}</h2>
        <p className={`para ${isVisible ? 'visible' : ''}`}>{content}</p>
    </div>
    )
}