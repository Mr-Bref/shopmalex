import React from 'react'
import Image from 'next/image'
function ClientArea() {
    return (
        <><div className="client-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Customer Review
                    </h2>
                    <a className="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div className="client-slider owl-carousel owl-theme pt-45">
                    <div className="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img1.png" width={100} />

                        <h3>
                            Thomas Debid
                        </h3>
                        <div className="quote-icon">
                            <i className="las la-quote-left">
                            </i>
                        </div>
                        <div className="rating">
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star-half-alt">
                            </i>
                        </div>
                        <p>
                            Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                            edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                            elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                    </div>
                    <div className="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img2.png" width={100} />

                        <h3>
                            Menvid Antham
                        </h3>
                        <div className="quote-icon">
                            <i className="las la-quote-left">
                            </i>
                        </div>
                        <div className="rating">
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star-half-alt">
                            </i>
                        </div>
                        <p>
                            Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                            edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                            elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                    </div>
                    <div className="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img3.png" width={100} />

                        <h3>
                            Elen Musk
                        </h3>
                        <div className="quote-icon">
                            <i className="las la-quote-left">
                            </i>
                        </div>
                        <div className="rating">
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star">
                            </i>
                            <i className="las la-star-half-alt">
                            </i>
                        </div>
                        <p>
                            Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                            edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                            elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                    </div>
                </div>
            </div>
            <div className="client-shape">
                <Image height={100} alt="image" src="/images/client-img/client-shape.png" width={100} />

            </div>
        </div>
        </>
    )
}

export default ClientArea