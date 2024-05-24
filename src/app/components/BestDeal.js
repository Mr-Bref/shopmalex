import React from 'react'
import Image from 'next/image'
function BestDeal() {
    return (
        <div class="best-deal-area pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Best Deal</h2>
                    <a href="#" class="view-btn">View All</a> </div>
                <div class="row pt-45">
                    <div class="col-lg-3 col-sm-6">
                        <div class="best-deal-card">
                            <div class="best-deal-img"> <a href="shop-details.html"> <Image height={100} alt="image" width={100} src="/images/best-deal/best-deal-img1.png" /> </a> <i class="las la-heart"></i> </div>
                            <div class="content">
                                <h3><a href="shop-details.html">Mac Pro</a></h3>
                                <div class="rating-tag"> <i class="las la-star"></i> (4.5) </div>
                                <p>Smart Product</p>
                                <span>$1200</span> <a href="#" class="add-card"><i class="las la-plus"></i></a> </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="best-deal-card">
                            <div class="best-deal-img"> <a href="shop-details.html"> <Image height={100} alt="image" width={100} src="/images/best-deal/best-deal-img2.png" /> </a> <i class="las la-heart"></i> </div>
                            <div class="content">
                                <h3><a href="shop-details.html">Lenovo Laptop</a></h3>
                                <div class="rating-tag"> <i class="las la-star"></i> (4.2) </div>
                                <p>Smart Product</p>
                                <span>$700</span> <a href="#" class="add-card"><i class="las la-plus"></i></a> </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="best-deal-card">
                            <div class="best-deal-img"> <a href="shop-details.html"> <Image height={100} alt="image" width={100} src="/images/best-deal/best-deal-img3.png" /> </a> <i class="las la-heart"></i> </div>
                            <div class="content">
                                <h3><a href="shop-details.html"> iPhone 8+ </a></h3>
                                <div class="rating-tag"> <i class="las la-star"></i> (4.7) </div>
                                <p>Smart Product</p>
                                <span>$1100</span> <a href="#" class="add-card"><i class="las la-plus"></i></a> </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="best-deal-card">
                            <div class="best-deal-img"> <a href="shop-details.html"> <Image height={100} alt="image" width={100} src="/images/best-deal/best-deal-img4.png" /> </a> <i class="las la-heart"></i> </div>
                            <div class="content">
                                <h3><a href="shop-details.html"> Vista</a></h3>
                                <div class="rating-tag"> <i class="las la-star"></i> (4.1) </div>
                                <p>Smart Product</p>
                                <span>$300</span> <a href="#" class="add-card"><i class="las la-plus"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestDeal