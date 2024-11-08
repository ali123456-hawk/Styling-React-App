// src/components/ProductCatalog.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
    const products = [
        {
          id: 1,
          name: "Smartphone",
          price: "$299",
          description: "Latest model with all-new features.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Electronics",
          rating: 4
        },
        {
          id: 2,
          name: "T-shirt",
          price: "$19",
          description: "100% cotton, very comfortable.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Clothing",
          rating: 3
        },
        {
          id: 3,
          name: "Laptop",
          price: "$899",
          description: "Powerful laptop with fast performance.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Electronics",
          rating: 5
        },
        {
          id: 4,
          name: "Headphones",
          price: "$49",
          description: "Noise-canceling over-ear headphones.",
          image: "hhttps://via.placeholder.com/150/24f355",
          category: "Electronics",
          rating: 4
        },
        {
          id: 5,
          name: "Coffee Maker",
          price: "$79",
          description: "Brew fresh coffee at home in minutes.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Home Appliances",
          rating: 4
        },
        {
          id: 6,
          name: "Sneakers",
          price: "$59",
          description: "Comfortable sneakers for everyday wear.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Footwear",
          rating: 3
        },
        {
          id: 7,
          name: "Backpack",
          price: "$39",
          description: "Durable backpack with multiple compartments.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Accessories",
          rating: 4
        },
        {
          id: 8,
          name: "Smartwatch",
          price: "$199",
          description: "Track fitness and receive notifications.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Electronics",
          rating: 4
        },
        {
          id: 9,
          name: "Blender",
          price: "$29",
          description: "Compact blender for smoothies and shakes.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Home Appliances",
          rating: 3
        },
        {
          id: 10,
          name: "Gaming Console",
          price: "$399",
          description: "Experience immersive gaming.",
          image: "https://via.placeholder.com/150/24f355",
          category: "Electronics",
          rating: 5
        }
      ];
      
  return (
    <div className="container">
      <div className="row my-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
