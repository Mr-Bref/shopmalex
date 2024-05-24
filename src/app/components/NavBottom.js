import React from 'react'
import Image from 'next/image'
function NavBottom() {
    return (
        <><div class="nav-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="navbar-category">
                            <ul class="navbar-nav">
                                <li class="nav-item-link">
                                    <a class="nav-link-item" href="#">
                                        <i class="las la-bars">
                                        </i>
                                        All Categories
                                        <i class="las la-angle-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-two">
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-bread-slice">
                                                </i>
                                                Bakery
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-store-alt">
                                                </i>
                                                Supplements
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-spa">
                                                </i>
                                                Beauty &amp; Care
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-apple-alt">
                                                </i>
                                                Fruits &amp; Vegetable
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-egg">
                                                </i>
                                                Dairy &amp; Eggs
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-wine-bottle">
                                                </i>
                                                Drinks &amp; Juice
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-shopping-bag">
                                                </i>
                                                Personal Hygiene
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-percentage">
                                                </i>
                                                Special Offer
                                            </a>
                                        </li>
                                        <li class="nav-item-link">
                                            <a class="nav-link-item" href="index-3.html">
                                                <i class="las la-fire">
                                                </i>
                                                Flash Deal
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <div class="top-header-form">
                            <form class="nav-bottom-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group search-form">
                                            <input class="form-control" placeholder="Find Your Product" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option>
                                                    Categories
                                                </option>
                                                <option>
                                                    Electronics
                                                </option>
                                                <option>
                                                    Baby &amp; Toddler
                                                </option>
                                                <option>
                                                    Clothing &amp; Shoes
                                                </option>
                                                <option>
                                                    Health &amp; Beauty
                                                </option>
                                                <option>
                                                    Entertainment &amp; Arts
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <button type="submit">
                                            <i class="flaticon-searching">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3">
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBottom