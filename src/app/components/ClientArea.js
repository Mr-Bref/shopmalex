import React from 'react'
import Image from 'next/image'
function ClientArea() {
    return (
        <><div class="client-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>
                        Customer Review
                    </h2>
                    <a class="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div class="client-slider owl-carousel owl-theme pt-45">
                    <div class="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img1.png" width={100} />

                        <h3>
                            Thomas Debid
                        </h3>
                        <div class="quote-icon">
                            <i class="las la-quote-left">
                            </i>
                        </div>
                        <div class="rating">
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star-half-alt">
                            </i>
                        </div>
                        <p>
                            Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                            edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                            elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                    </div>
                    <div class="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img2.png" width={100} />

                        <h3>
                            Menvid Antham
                        </h3>
                        <div class="quote-icon">
                            <i class="las la-quote-left">
                            </i>
                        </div>
                        <div class="rating">
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star-half-alt">
                            </i>
                        </div>
                        <p>
                            Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                            edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                            elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                    </div>
                    <div class="client-item">
                        <Image height={100} alt="image" src="/images/client-img/client-img3.png" width={100} />

                        <h3>
                            Elen Musk
                        </h3>
                        <div class="quote-icon">
                            <i class="las la-quote-left">
                            </i>
                        </div>
                        <div class="rating">
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star">
                            </i>
                            <i class="las la-star-half-alt">
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
            <div class="client-shape">
                <Image height={100} alt="image" src="/images/client-img/client-shape.png" width={100} />

            </div>
        </div>
        </>
    )
}

export default ClientArea