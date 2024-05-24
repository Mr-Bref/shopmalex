import React from 'react';
import Image from 'next/image';
import AddToCardButton from './AddToCardButton';

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
                            <div className="product-card">
                                <div className="product-card-img">
                                    <a href={product.detailsUrl}>
                                        <Image width={200} height={200} src={product.imageUrl} alt={product.name} />
                                    </a>
                                </div>
                                <div className="content">
                                    <h3><a href={product.detailsUrl}>{product.name}</a></h3>
                                    <div className="rating-tag">
                                        <i className="las la-star"></i>
                                        ({product.rating})
                                    </div>
                                    <p>{product.category}</p>
                                    <span>${product.price}</span>
                                    <AddToCardButton item={product} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
