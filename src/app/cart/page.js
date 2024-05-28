
import React from 'react'
import Link from 'next/link'
import CartTable from '../components/CartTable'

function page() {

    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Cart</h3>
                        <ul>
                            <li>
                                <Link href="index-2.html">Home</Link>
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
                            <form>
                                <div className="cart-wraps">
                                    <CartTable />

                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <div className="continue-shopping-box">
                                                    <Link href="#" className="default-btn"> Continue Shopping </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                                <Link href="#" className="default-btn"> Update Cart </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="cart-calc">
                                            <div className="cart-wraps-form">
                                                <h3>Calculate Shipping</h3>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <select>
                                                                <option value="">Credit Card Type</option>
                                                                <option value="">Another option</option>
                                                                <option value="">A option</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Credit Card Number"
                                                        />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Card Verification Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Coupon Code"
                                                    />
                                                </div>
                                                <Link href="#" className="default-btn btn-bg-three">
                                                    Apply Coupon
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="cart-totals">
                                            <h3>Cart Totals</h3>
                                            <ul>
                                                <li>Subtotal <span>$1430.00</span></li>
                                                <li>Shipping <span>$30.00</span></li>
                                                <li>Coupon <span>$20.00</span></li>
                                                <li>
                                                    Total <span><b>$1480.00</b></span>
                                                </li>
                                            </ul>
                                            <Link href="#" className="default-btn btn-bg-three">
                                                Proceed To Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page