import React from 'react'
import Image from 'next/image'
function NavbarArea() {
    return (
        <><div class="navbar-area">
            <div class="mobile-nav">
                <a class="logo" href="index-2.html">
                    <Image height={300} alt="image" src="/images/logo.png" width={300} />

                </a>
            </div>
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index-2.html">
                            <Image height={100} alt="image" src="/images/logo.png" width={100} />

                        </a>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        Home
                                        <i class="las la-caret-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="index-2.html">
                                                Electronics Shop
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="index-3.html">
                                                Grocery Shop
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index-4.html">
                                                Baby Shop
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Pages
                                        <i class="las la-caret-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="about.html">
                                                About
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                Shop
                                                <i class="las la-caret-down">
                                                </i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="shop-details.html">
                                                        Shop Details
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="shop-details-left-sidebar.html">
                                                        Shop Details Left Sidebar
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="shop-details-right-sidebar.html">
                                                        Shop Details Right Sidebar
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="tracking-order.html">
                                                        Tracking Order
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="size-guides.html">
                                                        Size Guides
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="customer-services.html">
                                                        Customer Services
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="compare.html">
                                                        Compare
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="cart.html">
                                                        Cart
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="checkout.html">
                                                        Checkout
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="wishlist.html">
                                                        Wishlist
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="my-account.html">
                                                        My Account
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="faq.html">
                                                FAQ
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="team.html">
                                                Team
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="testimonials.html">
                                                Testimonials
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                User
                                                <i class="las la-caret-down">
                                                </i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="log-in.html">
                                                        Log In
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="register.html">
                                                        Register
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="forget-password.html">
                                                        Forget Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="terms-condition.html">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="privacy-policy.html">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="404.html">
                                                404 page
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="search-page.html">
                                                Search Page
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="coming-soon.html">
                                                Coming Soon
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Shop
                                        <i class="las la-caret-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop-left-sidebar.html">
                                                Shop Left Sidebar
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop-right-sidebar.html">
                                                Shop Right Sidebar
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop-grid.html">
                                                Shop Grid
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop-full-width-sidebar.html">
                                                Shop Full Width Sidebar
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Categories
                                        <i class="las la-caret-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="categories-1.html">
                                                Categories (2 In Row)
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="categories-2.html">
                                                Categories (3 In Row)
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="categories-full-width.html">
                                                Categories Full Width
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Blog
                                        <i class="las la-caret-down">
                                        </i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a class="nav-link" href="blog-1.html">
                                                Blog Style One
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="blog-2.html">
                                                Blog Style Two
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="blog-details.html">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div class="nav-side d-display">
                                <ul class="nav-side-item">
                                    <li>
                                        <a class="cart-btn" href="#">
                                            <i class="flaticon-envelope">
                                            </i>
                                            <span>
                                                1
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="cart-btn" href="#">
                                            <i class="flaticon-heart">
                                            </i>
                                            <span>
                                                1
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="cart-btn" href="#">
                                            <i class="flaticon-shopping-bag">
                                            </i>
                                            <span>
                                                1
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="side-nav-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="circle-inner">
                            <div class="circle circle-one">
                            </div>
                            <div class="circle circle-two">
                            </div>
                            <div class="circle circle-three">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="side-nav-inner">
                            <div class="side-nav justify-content-center align-items-center">
                                <div class="side-nav-item">
                                    <ul class="nav-side-item">
                                        <li>
                                            <a class="cart-btn" href="#">
                                                <i class="flaticon-envelope">
                                                </i>
                                                <span>
                                                    1
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="cart-btn" href="#">
                                                <i class="flaticon-heart">
                                                </i>
                                                <span>
                                                    1
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="cart-btn" href="#">
                                                <i class="flaticon-shopping-bag">
                                                </i>
                                                <span>
                                                    1
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavbarArea