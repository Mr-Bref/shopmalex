import { useState } from "react";
export default function TabContent({ activeTab }) {
    return (
        <div className="tab-content">
            {activeTab === 'Specifications' && (
                <div className="tab-content-item">
                    <h2>iPhone X Full Specification</h2>
                    <div>
                        <h3>Technology: <span>GSM / HSPA / LTE</span></h3>
                        <h3>Dimensions: <span>143.6 x 70.9 x 7.7 mm</span></h3>
                        <h3>Weight: <span>174g</span></h3>
                        <h3>Build: <span>Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame</span></h3>
                        <h3>SIM: <span>Nano-SIM, IP67 dust/water resistant (up to 1m for 30 mins), Apple Pay (Visa, MasterCard, AMEX certified)</span></h3>
                        <h3>Display: <span>Super Retina OLED, HDR10, 625 nits (typ), 3D Touch</span></h3>
                        <h3>Camera: <span>7MP, f/2.2, 32mm (standard) SL 3D, (depth/biometrics sensor)</span></h3>
                    </div>
                </div>
            )}
            {activeTab === 'Reviews' && (
                <div className="tab-content-item">
                    <h2>Reviews</h2>
                    <div className="review-summary">
                        <span>Based on 15 Reviews</span>
                        <h3>4.8</h3>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star-half-alt"></i>
                        </div>
                        <p>18 Ratings</p>
                    </div>
                    <div className="review-list">
                        <div className="review-item">
                            <h3>Medison Decros</h3>
                            <div className="rating">
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star-half-alt"></i>
                            </div>
                            <span>on September 18, 2020 at 4:30pm</span>
                            <p>Review content goes here...</p>
                        </div>
                    </div>
                    <div className="review-form">
                        <h3>Add Your Review</h3>
                        <form id="reviewForm">
                            <div className="form-group">
                                <label>Your Review<span>*</span></label>
                                <textarea name="review" className="form-control" rows="4" placeholder="Your review"></textarea>
                            </div>
                            <div className="form-group">
                                <label>First Name<span>*</span></label>
                                <input type="text" className="form-control" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name<span>*</span></label>
                                <input type="text" className="form-control" placeholder="Last Name" required />
                            </div>
                            <div className="form-group">
                                <label>Your Email<span>*</span></label>
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number<span>*</span></label>
                                <input type="text" className="form-control" placeholder="Phone Number" required />
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};