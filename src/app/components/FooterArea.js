'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
function FooterArea() {

    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith('/admin')


    return (!isAdminRoute ?
        <><footer className="footer-area footer-bg">
            <div className="container" >
                <div className="footer-top pt-100 pb-70" style={{ margin: "0 auto" }}>
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
                                        <Link href="#">
                                            <i className="lab la-facebook-f">
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="lab la-twitter">
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="lab la-instagram">
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="lab la-youtube">
                                            </i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-widget ml-30">
                                <h3>
                                    Lien Rapide
                                </h3>
                                <ul className="footer-list">
                                    <li>
                                        <Link href="shop.html">
                                            Nouvelle Collection
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="shop.html">
                                            Boutique
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="account.html">
                                            Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Panier
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="footer-widget ml-40">
                                <h3>
                                    Our Blog
                                </h3>
                                <ul className="footer-blog">
                                    <li>
                                        <Image height={100} alt="image" src="/images/blog/footer-blog1.jpg" width={100} />

                                        <div className="content">
                                            <h3>
                                                <Link href="blog-details.html">
                                                    Digital Light Invention by Denis
                                                </Link>
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
                                                <Link href="blog-details.html">
                                                    Product Selling Strategy
                                                </Link>
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
                                                <Link href="blog-details.html">
                                                    Find the Best Product in Market
                                                </Link>
                                            </h3>
                                            <span>
                                                10 Dec 2020
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget pl-5">
                                <h3>
                                    Contactez Nous
                                </h3>
                                <ul className="footer-address">
                                    <li>
                                        <i className="las la-map-marker">
                                        </i>
                                        <div className="content">
                                            <h3>
                                                Cotonou, Benin
                                            </h3>

                                        </div>
                                    </li>
                                    <li>
                                        <i className="las la-phone">
                                        </i>
                                        <div className="content">
                                            <h3>
                                                <Link href="tel:+229 61561990">
                                                    +229 61561990
                                                </Link>
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
                                                <Link href="//email-protection#40292e262f002c2f2d2132346e232f2d">
                                                    <span className="__cf_email__" data-cfemail="0d64636b624d6162606c7f79236e6260">
                                                        example.com
                                                    </span>
                                                </Link>
                                            </h3>
                                            <span>
                                                Our Email
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
                            Copyright ©2024 Shopmalex. Tout droit reservés

                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
        : null)
}

export default FooterArea