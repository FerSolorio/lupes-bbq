import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src="/assets/logo-placeholder.png" alt="Lupes BBQ Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
