import React from 'react'
import Image from 'next/image'
function FooterArea() {
    return (
        <><footer class="footer-area footer-bg">
            <div class="container">
                <div class="footer-top pt-100 pb-70">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index-2.html">
                                        <Image height={100} alt="image" src="/images/logo.png" width={100} />

                                    </a>
                                </div>
                                <p>
                                    Gravida nibh vel velit auctor aliquet. Aenean sollicit thudin,
                                    lorem the quis bibendum auctor, nisi elit consequat ipsum, nec
                                    sem nibh id elit.
                                </p>
                                <ul class="social-link">
                                    <li>
                                        <a href="#">
                                            <i class="lab la-facebook-f">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lab la-twitter">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lab la-instagram">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lab la-youtube">
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-widget ml-30">
                                <h3>
                                    Quick Links
                                </h3>
                                <ul class="footer-list">
                                    <li>
                                        <a href="shop.html">
                                            New Collection
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">
                                            Best Deal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">
                                            Discount &amp; Offer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">
                                            Hot Sale
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">
                                            All Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account.html">
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Wish List
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-widget ml-40">
                                <h3>
                                    Our Blog
                                </h3>
                                <ul class="footer-blog">
                                    <li>
                                        <Image height={100} alt="image" src="/images/blog/footer-blog1.jpg" width={100} />

                                        <div class="content">
                                            <h3>
                                                <a href="blog-details.html">
                                                    Digital Light Invention by Denis
                                                </a>
                                            </h3>
                                            <span>
                                                04 Dec 2020
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <Image height={100} alt="image" src="/images/blog/footer-blog2.jpg" width={100} />

                                        <div class="content">
                                            <h3>
                                                <a href="blog-details.html">
                                                    Product Selling Strategy
                                                </a>
                                            </h3>
                                            <span>
                                                07 Dec 2020
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <Image height={100} alt="image" src="/images/blog/footer-blog3.jpg" width={100} />

                                        <div class="content">
                                            <h3>
                                                <a href="blog-details.html">
                                                    Find the Best Product in Market
                                                </a>
                                            </h3>
                                            <span>
                                                10 Dec 2020
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-widget pl-5">
                                <h3>
                                    Contact Us
                                </h3>
                                <ul class="footer-address">
                                    <li>
                                        <i class="las la-map-marker">
                                        </i>
                                        <div class="content">
                                            <h3>
                                                6B Green Hill, Barista, USA
                                            </h3>
                                            <span>
                                                Our Location
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="las la-phone">
                                        </i>
                                        <div class="content">
                                            <h3>
                                                <a href="tel:+1-432-675-896">
                                                    +1 432 675 896
                                                </a>
                                            </h3>
                                            <span>
                                                Phone Number
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="lar la-envelope">
                                        </i>
                                        <div class="content">
                                            <h3>
                                                <a href="//email-protection#40292e262f002c2f2d2132346e232f2d">
                                                    <span class="__cf_email__" data-cfemail="0d64636b624d6162606c7f79236e6260">
                                                        example.com
                                                    </span>
                                                </a>
                                            </h3>
                                            <span>
                                                Our Email
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="las la-clock">
                                        </i>
                                        <div class="content">
                                            <h3>
                                                9 AM - 5 PM (7 Days)
                                            </h3>
                                            <span>
                                                Open Hour
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copy-right-area">
                    <div class="copy-right-text">
                        <p>
                            Copyright ©2021 Lomart. All Rights Reserved by
                            <a href="">
                                Skera Theme
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default FooterArea