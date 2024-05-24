import React from 'react'
import Image from 'next/image'
function TopHeader() {
    return (
        <><div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-4">
                        <div class="top-header-social">
                            <ul>
                                <li>
                                    <h3 class="title">
                                        Follow Us :
                                    </h3>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image height={100} alt="image" src="/images/social-icon/facebook.svg" width={100} />

                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image height={100} alt="image" src="/images/social-icon/twitter.svg" width={100} />

                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image height={100} alt="image" src="/images/social-icon/youtube.svg" width={100} />

                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image height={100} alt="image" src="/images/social-icon/instagram.svg" width={100} />

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <div class="top-header-right">
                            <div class="top-contact">
                                <h3>
                                    Free Shipping Worldwide
                                </h3>
                            </div>
                            <div class="currency-list">
                                <select class="currency-list-item">
                                    <option>
                                        Currency
                                    </option>
                                    <option>
                                        Dollar
                                    </option>
                                    <option>
                                        Euro
                                    </option>
                                    <option>
                                        Pound
                                    </option>
                                </select>
                            </div>
                            <div class="language-list">
                                <select class="language-list-item">
                                    <option>
                                        English
                                    </option>
                                    <option>
                                        العربيّة
                                    </option>
                                    <option>
                                        Deutsch
                                    </option>
                                    <option>
                                        Português
                                    </option>
                                    <option>
                                        简体中文
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopHeader