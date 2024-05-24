import Image from 'next/image'
import React from 'react'

function BannerStyleArea() {
    return (
        <><div class="banner-style-area">
            <div class="banner-style-slider owl-carousel owl-theme">
                <div class="banner-style-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Fresh Food Good Health
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a class="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img1.png" width={100} />

                    </div>
                </div>
                <div class="banner-style-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Source for fresh Food
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a class="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img2.png" width={100} />

                    </div>
                </div>
                <div class="banner-style-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Find all Daily Groceries
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a class="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img3.png" width={100} />

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BannerStyleArea