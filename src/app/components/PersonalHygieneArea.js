import React from 'react'
import Image from 'next/image'
function PersonalHygieneArea() {
    return (
        <><div class="personal-hygiene-area pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>
                        Personal Hygiene Products
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
                                    <Image height={100} alt="image" src="/images/personal-hygiene/personal-hygiene-img1.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        ToothBrush
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.5)
                                </div>
                                <p>
                                    Personal Product
                                </p>
                                <span>
                                    $10
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
                                    <Image height={100} alt="image" src="/images/personal-hygiene/personal-hygiene-img2.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Mouth Wash
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.2)
                                </div>
                                <p>
                                    Personal Product
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
                                    <Image height={100} alt="image" src="/images/personal-hygiene/personal-hygiene-img3.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Colgate Pack
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.7)
                                </div>
                                <p>
                                    Personal Product
                                </p>
                                <span>
                                    $35
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
                                    <Image height={100} alt="image" src="/images/personal-hygiene/personal-hygiene-img4.png" width={100} />

                                </a>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Bleach
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.8)
                                </div>
                                <p>
                                    Personal Product
                                </p>
                                <span>
                                    $40
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

export default PersonalHygieneArea