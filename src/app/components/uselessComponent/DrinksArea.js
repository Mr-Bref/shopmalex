import React from 'react'
import Image from 'next/image'
function DrinksArea() {
    return (
        <><div className="drinks-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Drink Products
                    </h2>
                    <a className="view-btn" href="#">
                        View More
                    </a>
                </div>
                <div className="row pt-45">
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img1.png" width={100} />

                                </a>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Pepsi Can
                                    </a>
                                </h3>
                                <div className="rating-tag">
                                    <i className="las la-star">
                                    </i>
                                    (4.5)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $200
                                </span>
                                <a className="add-card" href="#">
                                    <i className="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img2.png" width={100} />

                                </a>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Water Pack
                                    </a>
                                </h3>
                                <div className="rating-tag">
                                    <i className="las la-star">
                                    </i>
                                    (4.2)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $20
                                </span>
                                <a className="add-card" href="#">
                                    <i className="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img3.png" width={100} />

                                </a>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Water Bottle
                                    </a>
                                </h3>
                                <div className="rating-tag">
                                    <i className="las la-star">
                                    </i>
                                    (4.7)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $30
                                </span>
                                <a className="add-card" href="#">
                                    <i className="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img4.png" width={100} />

                                </a>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Can Package
                                    </a>
                                </h3>
                                <div className="rating-tag">
                                    <i className="las la-star">
                                    </i>
                                    (4.8)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $50
                                </span>
                                <a className="add-card" href="#">
                                    <i className="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DrinksArea