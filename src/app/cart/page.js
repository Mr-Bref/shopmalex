
import React from 'react'
import Link from 'next/link'
import CartTable from '../components/CartTable'
import WrapperFedaPayButton from '../components/WrapperKkiaPayButton'
import CustomKkiaPayButton from '../components/CustomKkiaPayButton'

function page() {
    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Cart</h3>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="cart-wraps-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div>
                                <div className="cart-wraps">
                                    <CartTable />

                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <div className="continue-shopping-box">
                                                    <Link href="/categories" className="default-btn"> Continue Shopping </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                                <WrapperFedaPayButton />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page