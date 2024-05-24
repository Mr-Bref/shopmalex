import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RecommendedProducts = ({ products }) => (
    <div className="all-product-area pb-70">
        <div className="container">
            <div className="section-title">
                <h2>Recommended Products for You</h2>
            </div>
            <div className="row pt-45">
                {products.map((product, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="all-product-item">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-sm-5 pr-0">
                                    <div className="all-product-img">
                                        <Link href={product.detailsUrl}>
                                            <Image
                                                width={200}
                                                height={200}
                                                src={product.imageUrl}
                                                alt="Product Image"
                                            />
                                        </Link>
                                        <i className="las la-heart"></i>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7">
                                    <div className="all-product-content">
                                        <h3>
                                            <Link href={product.detailsUrl}>{product.name}</Link>
                                        </h3>
                                        <div className="rating">
                                            <i className="las la-star"></i>
                                            ({product.rating})
                                        </div>
                                        <span>${product.price} </span>
                                        <Link href={product.detailsUrl} className="add-cart-btn">
                                            <i className="las la-plus"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default RecommendedProducts