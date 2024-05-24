import React from 'react'
import Image from 'next/image'
function ProductBannerArea() {
    return (
        <><div class="product-banner-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="product-banner-card-two">
                            <h3>
                                Grab Fresh Fruits and Vegetables
                            </h3>
                            <a class="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div class="product-banner-card-img">
                                <Image height={100} alt="image" src="/images/product-banner/product-banner-img6.png" width={100} />

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="product-banner-card-two">
                            <h3>
                                100% Fresh Chicken and Meat
                            </h3>
                            <a class="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div class="product-banner-card-img">
                                <Image height={100} alt="image" src="/images/product-banner/product-banner-img7.png" width={100} />

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div class="product-banner-card-two">
                            <h3>
                                Find Daily Groceries and Others
                            </h3>
                            <a class="default-btn border-radius-5" href="shop-grid.html">
                                Shop Now
                            </a>
                            <div class="product-banner-card-img">
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