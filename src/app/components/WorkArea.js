import React from 'react'

function WorkArea() {
    return (
        <><div class="work-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>
                        How It Works
                    </h2>
                    <a class="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-4 col-sm-6">
                        <div class="work-card">
                            <div class="number">
                                1
                            </div>
                            <div class="work-icon">
                                <i class="flaticon-online-order">
                                </i>
                                <h3>
                                    Order
                                </h3>
                            </div>
                            <p>
                                Choose any product and order your favorite products online
                                Choose any product
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="work-card">
                            <div class="number">
                                2
                            </div>
                            <div class="work-icon">
                                <i class="flaticon-grocery">
                                </i>
                                <h3>
                                    Assistant
                                </h3>
                            </div>
                            <p>
                                Choose any product and order your favorite products online
                                Choose any product
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div class="work-card">
                            <div class="number">
                                3
                            </div>
                            <div class="work-icon">
                                <i class="flaticon-delivery-truck">
                                </i>
                                <h3>
                                    Deliver
                                </h3>
                            </div>
                            <p>
                                Choose any product and order your favorite products online
                                Choose any product
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkArea