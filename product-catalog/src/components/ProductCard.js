// src/components/ProductCard.js
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Set background color based on category
  const cardBgColor =
    product.category === "Electronics" ? styles.electronicsBg : styles.clothingBg;

  return (
    <div className={`card mb-3 ${cardBgColor}`} style={{ borderRadius: "10px" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h6>{product.price}</h6>
        <div className={styles.rating}>
          {'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}
        </div>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default ProductCard;
