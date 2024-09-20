import React from 'react';
import '../Style/Naviguation.scss'

function NavItem({ href, label, anchor }) {
    return (
        <div className="nav-item">
            <a href={anchor ? `#${anchor}` : href}>{label}</a>
        </div>
    );
}

export default function Navigation() {

    return (
        <nav className="navigation" >
            <NavItem href="/" label="Home" />
            <NavItem href="/CitiesPage" label="Cities" />
        </nav>
    );
}