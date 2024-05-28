import Image from 'next/image'
import React from 'react'

function BannerStyleArea() {
    return (
        <><div className="banner-style-area">
            <div className="banner-style-slider owl-carousel owl-theme">
                <div className="banner-style-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Fresh Food Good Health
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a className="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img1.png" width={100} />

                    </div>
                </div>
                <div className="banner-style-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Source for fresh Food
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a className="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img2.png" width={100} />

                    </div>
                </div>
                <div className="banner-style-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="content">
                                    <span>
                                        Easy to Take Good Food
                                    </span>
                                    <h1>
                                        Find all Daily Groceries
                                    </h1>
                                    <p>
                                        Order any food and it will be in your door
                                    </p>
                                    <a className="default-btn border-radius-5" href="#">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-style-img">
                        <Image height={100} alt="image" src="/images/home-two/home-two-img3.png" width={100} />

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BannerStyleArea