import React from 'react'
import Image from 'next/image'
function DrinksArea() {
    return (
        <><div class="drinks-area pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>
                        Drink Products
                    </h2>
                    <a class="view-btn" href="#">
                        View More
                    </a>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img1.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Pepsi Can
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.5)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $200
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img2.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Water Pack
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.2)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $20
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img3.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Water Bottle
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.7)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $30
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-card-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/drinks-product/drinks-img4.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Can Package
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.8)
                                </div>
                                <p>
                                    Drinks Product
                                </p>
                                <span>
                                    $50
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
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