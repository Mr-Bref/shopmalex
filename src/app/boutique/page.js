import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productInfo } from '../data/product'
import RecommendedProducts from '../components/Rcommended'
import { recommendedProductInfo } from '../data/recommended'
import NavBottom from '../components/NavBottom'
function page() {

    return (
        <>
            <NavBottom />

            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Boutique</h3>
                        <ul>
                            <li>
                                <Link href="index-2.html">Home</Link>
                            </li>
                            <li>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>Boutique</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shop-style-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {productInfo.map((product, index) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <Link href={product.detailsUrl}>
                                            <Image width={200} height={200} src={product.imageUrl} alt={product.name} />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3><Link href={product.detailsUrl}>{product.name}</Link></h3>
                                        <div className="rating-tag">
                                            <i className="las la-star"></i>
                                            ({product.rating})
                                        </div>
                                        <p>{product.description}</p>
                                        <span>${product.price}</span>
                                        <Link href="#" className="add-card"><i className="las la-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="product-banner-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-banner-item product-banner-item-bg-1">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="content">
                                            <h3>Xbox One Controller Set</h3>
                                            <span>only for <b>$400</b></span>
                                            <Link
                                                href="#"
                                                className="default-btn border-radius-5 default-btn-border"
                                            >Shop Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="product-banner-img">
                                            <Image width={200} height={200}
                                                src="/images/product-banner/product-banner-img1.png"
                                                alt="Images"
                                            />
                                            <div className="product-banner-tag">
                                                <h3>30%</h3>
                                                <span>Off</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="product-banner-item product-banner-item-rs product-banner-item-bg-2"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="content">
                                            <h3>Google Smart Home</h3>
                                            <span>$1200.00</span>
                                            <Link href="#" className="default-btn border-radius-5">Shop Now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="product-banner-img product-banner-img-rs">
                                            <Image width={200} height={200}
                                                src="/images/product-banner/product-banner-img2.png"
                                                alt="Images"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RecommendedProducts products={recommendedProductInfo} />


        </>
    )
}

export default page