import React from 'react'
import Image from 'next/image'
function DiaryProductArea() {
    return (
        <>
            <div class="diary-product-area pb-70">
                <div class="container">
                    <div class="section-title">
                        <h2>
                            Diary Products
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
                                        <Image height={100} alt="image" src="/images/diary-product/diary-product-img1.png" width={100} />

                                    </a>
                                </div>
                                <div class="content">
                                    <h3>
                                        <a href="shop-details.html">
                                            Milky Drinks
                                        </a>
                                    </h3>
                                    <div class="rating-tag">
                                        <i class="las la-star">
                                        </i>
                                        (4.5)
                                    </div>
                                    <p>
                                        Diary Product
                                    </p>
                                    <span>
                                        $100
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
                                        <Image height={100} alt="image" src="/images/diary-product/diary-product-img2.png" width={100} />

                                    </a>
                                </div>
                                <div class="content">
                                    <h3>
                                        <a href="shop-details.html">
                                            Cheese
                                        </a>
                                    </h3>
                                    <div class="rating-tag">
                                        <i class="las la-star">
                                        </i>
                                        (4.2)
                                    </div>
                                    <p>
                                        Diary Product
                                    </p>
                                    <span>
                                        $120
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
                                        <Image height={100} alt="image" src="/images/diary-product/diary-product-img3.png" width={100} />

                                    </a>
                                </div>
                                <div class="content">
                                    <h3>
                                        <a href="shop-details.html">
                                            Milk Pack
                                        </a>
                                    </h3>
                                    <div class="rating-tag">
                                        <i class="las la-star">
                                        </i>
                                        (4.7)
                                    </div>
                                    <p>
                                        Diary Product
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
                        <div class="col-lg-3 col-sm-6">
                            <div class="product-card">
                                <div class="product-card-img">
                                    <a href="shop-details.html">
                                        <Image height={100} alt="image" src="/images/diary-product/diary-product-img4.png" width={100} />

                                    </a>
                                </div>
                                <div class="content">
                                    <h3>
                                        <a href="shop-details.html">
                                            Butter
                                        </a>
                                    </h3>
                                    <div class="rating-tag">
                                        <i class="las la-star">
                                        </i>
                                        (4.8)
                                    </div>
                                    <p>
                                        Diary Product
                                    </p>
                                    <span>
                                        $70
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

export default DiaryProductArea