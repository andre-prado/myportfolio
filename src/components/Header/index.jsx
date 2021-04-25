import React from 'react';

import './style.css';

function Header() {
    return (
        <header className="header">
            <section className="header_logo">
                
            </section>
            <ul className="header_menu">
                <button >Sobre mim</button>
                <button >Projetos</button>
                <button >Contato</button>
            </ul>
        </header>
    );
}

export default Header;