import React from 'react';
import ProductCardC from './ProductCardC';



const CategorySection = ({ title, products }) => {
    return (
        <div className={`${title.toLowerCase().replace(/ /g, '-')}-area pb-70`}>
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <a href="#" className="view-btn">View More</a>
                </div>
                <div className="row pt-45">
                    {products.map((product, index) => (
                        <div key={index} className="col-lg-4 col-sm-6">
                            <ProductCardC product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
