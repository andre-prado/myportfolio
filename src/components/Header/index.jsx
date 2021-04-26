import React from 'react';

import './style.css';

function Header() {
    
    return (
        <header className="header">
            <section className="header_logo">

            </section>
            <ul className="header_menu">
                <li className="header_menu-option" >
                    Sobre mim
                </li>
                <li className="header_menu-option">
                    Projetos
                </li>
                <li className="header_menu-option">
                    Contato
                </li>
            </ul>
        </header>
    );
}

export default Header;