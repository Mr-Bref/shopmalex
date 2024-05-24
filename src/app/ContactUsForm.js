'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        msg_subject: '',
        message: '',
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Nom <span>*</span></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            data-error="Please Enter Your Name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Email <span>*</span></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            data-error="Please Enter Your Email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Numero de telephone <span>*</span></label>
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            data-error="Please Enter Your number"
                            className="form-control"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Sujet <span>*</span></label>
                        <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            className="form-control"
                            data-error="Please Enter Your Subject"
                            placeholder="Your Subject"
                            value={formData.msg_subject}
                            onChange={handleChange}
                            required
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <label>Message <span>*</span></label>
                        <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="8"
                            data-error="Write your message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="agree-label">
                        <input
                            type="checkbox"
                            id="chb1"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="chb1">
                            Accept <Link href="terms-condition.html">Terms & Conditions</Link> And{' '}
                            <Link href="privacy-policy.html">Privacy Policy.</Link>{' '}
                        </label>
                        <br />
                        <label htmlFor="chb1" className="error" style={{ display: 'none' }}>
                            Please Accept Terms &amp; Condition
                        </label>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                    <div className="form-response"></div>
                    <div id="message1">
                        <div className="alert alert-success" role="alert">
                            <strong>Thank You !</strong> Your Details Submission Successfully!
                        </div>
                    </div>
                    <div id="message1">
                        <div className="alert alert-danger" role="alert">
                            <strong> Error !</strong> Message Could not be sent, please try later !
                        </div>
                    </div>
                    <button type="submit" id="submit" className="default-btn border-radius-5">
                        Envoyer
                    </button>
                    <span className="ajax-loader" id="loader" style={{ display: 'none' }}></span>
                    <div id="msg" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
