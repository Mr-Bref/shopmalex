import React from 'react'
import Image from 'next/image'
function ProductBannerArea() {
    return (
        <><div className="product-banner-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="product-banner-card-two">
                            <h3>
                                Grab Fresh Fruits and Vegetables
                            </h3>
                            <a className="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div className="product-banner-card-img">
                                <Image height={100} alt="image" src="/images/product-banner/product-banner-img6.png" width={100} />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="product-banner-card-two">
                            <h3>
                                100% Fresh Chicken and Meat
                            </h3>
                            <a className="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div className="product-banner-card-img">
                                <Image height={100} alt="image" src="/images/product-banner/product-banner-img7.png" width={100} />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="product-banner-card-two">
                            <h3>
                                Find Daily Groceries and Others
                            </h3>
                            <a className="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div className="product-banner-card-img">
                                <Image height={100} alt="image" src="/images/product-banner/product-banner-img8.png" width={100} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductBannerArea