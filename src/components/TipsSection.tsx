import React from 'react';
import styles from './TipsSection.module.css';

const tips = [
    'Cómo encender carbón: Usa papel y un encendedor.',
    'Maridar costillas: Prueba con una cerveza oscura.',
    'Temperatura ideal para brisket: 90-95°C.',
];

const TipsSection: React.FC = () => {
    return (
        <section className={styles.tips}>
            <h2>Tips Parrilleros</h2>
            {tips.map((tip, index) => (
                <div key={index} className={styles.tip}>
                    <p>{tip}</p>
                </div>
            ))}
        </section>
    );
};

export default TipsSection;
