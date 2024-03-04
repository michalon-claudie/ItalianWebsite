import React , {useState,useEffect}from 'react';
import '../Style/Naviguation.scss'

function NavItem({ href, label }) {
    return (
        <div className="nav-item">
            <a href={href}>{label}</a>
        </div>
    );
}

export default function Navigation() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.navigation');
            if (nav) {
                const navTop = nav.offsetTop;
                const windowHeight = window.innerHeight;
                if (window.pageYOffset > navTop - windowHeight + 400) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Appel initial pour déterminer la visibilité au chargement de la page
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`navigation ${isVisible ? 'visible' : ''}`}>
            <NavItem href="../Pages/Italiano.jsx" label="Home" />
            <NavItem href="lamiastoria.html" label="La mia storia" />
            <NavItem href="Torino.html" label="Torino" />
            <NavItem href="Firenze.html" label="Firenze" />
            <NavItem href="Sicilia.html" label="La Sicilia" />
            <NavItem href="Ricetta.html" label="Ricette" />
            <NavItem href="Toscana.html" label="Toscana" />
            <NavItem href="Imparare.html" label="Imparare l'Italiano" />
            <NavItem href="Contact.html" label="Contact" />
        </nav>
    );
}