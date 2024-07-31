import React, { useState, useEffect } from 'react'

export default function About({title,content}){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const para = document.querySelector('.para');
            if (para) {
              const paraTop = para.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;
              if (paraTop < windowHeight - 100) {
                setIsVisible(true);
              }
            }
          };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
    <div className='flex flex-col items-center' id="about">
        <h2 className="p-5 text-3xl mt-12 mb-0">{title}</h2>
        <p className={`para w-9/12 border-b border-l p-5 text-xl mt-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {content}</p>
    </div>
    )
}