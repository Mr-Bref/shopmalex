import React from 'react'
import Image from 'next/image'
function BlogArea() {
    return (
        <><div class="blog-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>
                        Latest Blogs
                    </h2>
                    <a class="view-btn" href="#">
                        View All
                    </a>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <a href="blog-details.html">
                                <Image height={100} alt="image" src="/images/blog/blog-img1.jpg" width={100} />

                            </a>
                            <div class="content">
                                <div class="date-tag">
                                    20 Dec
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        First Day Sales On Instagram
                                    </a>
                                </h3>
                                <p>
                                    Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                    biben edum auc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <a href="blog-details.html">
                                <Image height={100} alt="image" src="/images/blog/blog-img2.jpg" width={100} />

                            </a>
                            <div class="content">
                                <div class="date-tag">
                                    22 Dec
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        Prosthetic Arm Visualisation
                                    </a>
                                </h3>
                                <p>
                                    Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                    biben edum auc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div class="blog-card">
                            <a href="blog-details.html">
                                <Image height={100} alt="image" src="/images/blog/blog-img3.jpg" width={100} />

                            </a>
                            <div class="content">
                                <div class="date-tag">
                                    24 Dec
                                </div>
                                <h3>
                                    <a href="blog-details.html">
                                        Google Launch New Product
                                    </a>
                                </h3>
                                <p>
                                    Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                    biben edum auc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogArea