import React from 'react'
import Image from 'next/image'
function FlashSaleArea() {
    return (
        <><div class="flash-sale-area-two pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>
                        Flash Sale
                    </h2>
                    <a class="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-3 col-md-6">
                        <div class="flash-sale-card">
                            <div class="flash-sale-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/flash-sale/flash-sale-img9.png" width={100} />

                                </a>
                                <div class="flash-tag">
                                    <b>
                                        50%
                                    </b>
                                    Off
                                </div>
                                <i class="las la-heart">
                                </i>
                                <div id="timer">
                                    <div id="days">
                                    </div>
                                    <div id="hours">
                                    </div>
                                    <div id="minutes">
                                    </div>
                                    <div id="seconds">
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Oil Pack
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.5)
                                </div>
                                <p>
                                    Smart Product
                                </p>
                                <span>
                                    <del>
                                        $1200
                                    </del>
                                    $600
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="flash-sale-card">
                            <div class="flash-sale-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/flash-sale/flash-sale-img10.png" width={100} />

                                </a>
                                <div class="flash-tag">
                                    <b>
                                        50%
                                    </b>
                                    Off
                                </div>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Hair Shampoo
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.2)
                                </div>
                                <p>
                                    Smart Product
                                </p>
                                <span>
                                    <del>
                                        $800
                                    </del>
                                    $700
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="flash-sale-card">
                            <div class="flash-sale-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/flash-sale/flash-sale-img11.png" width={100} />

                                </a>
                                <div class="flash-tag">
                                    <b>
                                        50%
                                    </b>
                                    Off
                                </div>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Junk Food
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.3)
                                </div>
                                <p>
                                    Smart Product
                                </p>
                                <span>
                                    <del>
                                        $90
                                    </del>
                                    $65
                                </span>
                                <a class="add-card" href="#">
                                    <i class="las la-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="flash-sale-card">
                            <div class="flash-sale-img">
                                <a href="shop-details.html">
                                    <Image height={100} alt="image" src="/images/flash-sale/flash-sale-img12.png" width={100} />

                                </a>
                                <div class="flash-tag">
                                    <b>
                                        50%
                                    </b>
                                    Off
                                </div>
                            </div>
                            <div class="content">
                                <h3>
                                    <a href="shop-details.html">
                                        Coconut Oil
                                    </a>
                                </h3>
                                <div class="rating-tag">
                                    <i class="las la-star">
                                    </i>
                                    (4.7)
                                </div>
                                <p>
                                    Smart Product
                                </p>
                                <span>
                                    <del>
                                        $80
                                    </del>
                                    $55
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

export default FlashSaleArea