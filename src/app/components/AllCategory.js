'use client'
import React from 'react'
import { useState, useEffect } from 'react';

import { productByCategoriesInfo } from '../data/productByCategory'
import CategorySection from '../components/CategorySection'


function AllCategory() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/api/category');
                const data = await response.json();

                if (data.success) {
                    console.log(data.products)
                    setProductData(data.products);
                } else {
                    console.error('Error fetching product data:', data.error);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, []);

    if (!productData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Boutique</h3>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>Boutique</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CategorySection title={productData[0].categoryName} products={productData[0].products} />
            <CategorySection title={productData[1].categoryName} products={productData[1].products} />
            <CategorySection title={productData[2].categoryName} products={productData[2].products} />
            <CategorySection title={productData[3].categoryName} products={productData[3].products} />
            <CategorySection title={productData[4].categoryName} products={productData[4].products} />
            <CategorySection title={productData[5].categoryName} products={productData[5].products} />

        </>
    )
}

export default AllCategory