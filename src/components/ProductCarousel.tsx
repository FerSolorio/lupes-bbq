import React from 'react';
import styles from './ProductCarousel.module.css';

const products = [
    { name: 'Smoked Sausage', description: 'Deliciosa salchicha ahumada.', image: 'placeholder' },
    { name: 'Boneless', description: 'Costillas sin hueso, perfectas para compartir.', image: 'placeholder' },
    { name: 'Alitas', description: 'Alitas jugosas y llenas de sabor.', image: 'placeholder' },
    { name: 'Baby Back Ribs', description: 'Costillas tiernas y sabrosas.', image: 'placeholder' },
    { name: 'Brisket', description: 'Carne de res ahumada y jugosa.', image: 'placeholder' },
    { name: 'Pulled Pork', description: 'Cerdo desmenuzado, ideal para sándwiches.', image: 'placeholder' },
    { name: 'BBQ Tradicional', description: 'Sabor auténtico envasado.', image: 'placeholder' },
];

const ProductCarousel: React.FC = () => {
    return (
        <div className={styles.carousel}>
            {products.map((product, index) => (
                <div key={index} className={styles.product}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductCarousel;
