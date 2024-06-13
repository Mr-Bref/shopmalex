'use client'
import React, { useEffect, useState } from 'react';
import ProductCardC from './ProductCardC';

function RecommendedProducts() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        // Fetch products for the category
        const fetchProducts = async () => {
            try {
                const response = await fetch(`/api/recommendation`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ productId: 3 })
                });
                const data = await response.json();
                setProducts(data.products);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



    return (
        <div className="all-product-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Spécial Recommendation</h2>
                </div>
                <div className="row pt-45">
                    {!products ? <div>Chargement...</div> : products.map((product, index) => (
                        <div key={index} className="col-lg-4 col-sm-6">
                            <ProductCardC product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default RecommendedProducts