import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>Contacto</li>
                <li>Aviso de privacidad</li>
                <li>Redes sociales</li>
            </ul>
        </footer>
    );
};

export default Footer;
