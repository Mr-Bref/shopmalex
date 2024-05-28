import React from 'react'

function WorkArea() {
    return (
        <><div className="work-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>
                        How It Works
                    </h2>
                    <a className="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div className="row pt-45">
                    <div className="col-lg-4 col-sm-6">
                        <div className="work-card">
                            <div className="number">
                                1
                            </div>
                            <div className="work-icon">
                                <i className="flaticon-online-order">
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
                    <div className="col-lg-4 col-sm-6">
                        <div className="work-card">
                            <div className="number">
                                2
                            </div>
                            <div className="work-icon">
                                <i className="flaticon-grocery">
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
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="work-card">
                            <div className="number">
                                3
                            </div>
                            <div className="work-icon">
                                <i className="flaticon-delivery-truck">
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