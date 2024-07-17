import React from 'react';
import '../Style/Naviguation.scss'

function NavItem({ href, label }) {
    return (
        <div className="nav-item">
            <a href={href}>{label}</a>
        </div>
    );
}

export default function Navigation() {

    return (
        <nav className="navigation" >
            <NavItem href="/" label="Home" />
            <NavItem href="lamiastoria.html" label="La mia storia" />
            <NavItem href="/Firenze" label="Firenze" />
            <NavItem href="Ricetta.html" label="Ricette" />
            <NavItem href="Imparare.html" label="Imparare l'Italiano" />
            <NavItem href="Contact.html" label="Contact" />
        </nav>
    );
}