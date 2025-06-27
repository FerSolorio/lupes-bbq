import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.hero}>
            <h1>Parrilla sin complicaciones, sabor sin límites</h1>
            <h2>Descubre nuestros productos congelados</h2>
            <button className={styles.ctaButton}>Conoce los cortes</button>
        </section>
    );
};

export default HeroSection;
