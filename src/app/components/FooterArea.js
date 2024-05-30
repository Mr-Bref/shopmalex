import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function FooterArea() {
    return (
        <><footer className="footer-area footer-bg">
            <div className="container">
                <div className="footer-top pt-100 pb-70">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-logo ">
                                    <Link className="navbar-brand" href="/" style={{ color: "black" }}>
                                        <b>Shop<span style={{ color: "#fb341f" }}>Malex</span></b>
                                    </Link>
                                </div>
                                <p>
                                    Gravida nibh vel velit auctor aliquet. Aenean sollicit thudin,
                                    lorem the quis bibendum auctor, nisi elit consequat ipsum, nec
                                    sem nibh id elit.
                                </p>
                                <ul className="social-link">
                                    <li>
                                        <a href="#">
                                            <i className="lab la-facebook-f">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lab la-twitter">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lab la-instagram">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lab la-youtube">
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget ml-30">
                                <h3>
                                    Quick Links
                                </h3>
                                <ul className="footer-list">
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
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget ml-40">
                                <h3>
                                    Our Blog
                                </h3>
                                <ul className="footer-blog">
                                    <li>
                                        <Image height={100} alt="image" src="/images/blog/footer-blog1.jpg" width={100} />

                                        <div className="content">
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

                                        <div className="content">
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

                                        <div className="content">
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
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget pl-5">
                                <h3>
                                    Contact Us
                                </h3>
                                <ul className="footer-address">
                                    <li>
                                        <i className="las la-map-marker">
                                        </i>
                                        <div className="content">
                                            <h3>
                                                6B Green Hill, Barista, USA
                                            </h3>
                                            <span>
                                                Our Location
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="las la-phone">
                                        </i>
                                        <div className="content">
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
                                        <i className="lar la-envelope">
                                        </i>
                                        <div className="content">
                                            <h3>
                                                <a href="//email-protection#40292e262f002c2f2d2132346e232f2d">
                                                    <span className="__cf_email__" data-cfemail="0d64636b624d6162606c7f79236e6260">
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
                                        <i className="las la-clock">
                                        </i>
                                        <div className="content">
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
                <div className="copy-right-area">
                    <div className="copy-right-text">
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