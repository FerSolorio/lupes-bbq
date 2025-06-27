import React from 'react';
import styles from './BBQBox.module.css';

const BBQBox: React.FC = () => {
    return (
        <section className={styles.bbqBox}>
            <h2>BBQ BOX</h2>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h3>Paquete 1</h3>
                    <p>Descripción del paquete 1.</p>
                    <button>Ver más</button>
                </div>
                <div className={styles.box}>
                    <h3>Paquete 2</h3>
                    <p>Descripción del paquete 2.</p>
                    <button>Ver más</button>
                </div>
                <div className={styles.box}>
                    <h3>Paquete 3</h3>
                    <p>Descripción del paquete 3.</p>
                    <button>Ver más</button>
                </div>
            </div>
        </section>
    );
};

export default BBQBox;
