'use client'
import Image from "next/image";
import NavBottom from "./components/NavBottom";
export default function Home() {
  return (
    <>
      <div>
        {/* <div className="preloader">
          <div className="d-table">
            <div className="d-table-cell">
              <Image width={200} height={200} src="/images/preloder-img.png" alt="Images" />
            </div>
          </div>
        </div> */}

        <div className="navbar-area" >
          <div className="mobile-nav">
            <a href="index-2.html" className="logo">
              <Image width={100} height={100} src="/images/logo.png" className="logo" alt="Logo" style={{ width: '50px', height: "50", objectFit: "contain" }} />
            </a>
          </div>
          <div className="side-nav-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="circle-inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              </div>
              <div className="container">
                <div className="side-nav-inner">
                  <div className="side-nav justify-content-center align-items-center">
                    <div className="side-nav-item">
                      <ul className="nav-side-item">
                        <li>
                          <a href="#" className="cart-btn">
                            <i className="flaticon-envelope"></i>
                            <span>1</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cart-btn">
                            <i className="flaticon-heart"></i>
                            <span>1</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cart-btn">
                            <i className="flaticon-shopping-bag"></i>
                            <span>1</span>
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

        <NavBottom />

        <div className="banner-style-area">
          <div className="banner-style-slider owl-carousel owl-theme">
            <div className="banner-style-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content">
                      <span>Easy to Take Good Food</span>
                      <h1>Fresh Food Good Health</h1>
                      <p>Order any food and it will be in your door</p>
                      <a href="#" className="default-btn border-radius-5">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-style-img">
                <Image width={200} height={200} src="/images/home-two/home-two-img1.png" alt="Images" />
              </div>
            </div>
            <div className="banner-style-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content">
                      <span>Easy to Take Good Food</span>
                      <h1>Source for fresh Food</h1>
                      <p>Order any food and it will be in your door</p>
                      <a href="#" className="default-btn border-radius-5">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-style-img">
                <Image width={200} height={200} src="/images/home-two/home-two-img2.png" alt="Images" />
              </div>
            </div>
            <div className="banner-style-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content">
                      <span>Easy to Take Good Food</span>
                      <h1>Find all Daily Groceries</h1>
                      <p>Order any food and it will be in your door</p>
                      <a href="#" className="default-btn border-radius-5">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-style-img">
                <Image width={200} height={200} src="/images/home-two/home-two-img3.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-banner-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="product-banner-card-two">
                  <h3>Grab Fresh Fruits and Vegetables</h3>
                  <a href="shop-grid.html" className="default-btn border-radius-5"
                  >Shop Now</a
                  >
                  <div className="product-banner-card-img">
                    <Image width={200} height={200}
                      src="/images/product-banner/product-banner-img6.png"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-banner-card-two">
                  <h3>100% Fresh Chicken and Meat</h3>
                  <a href="shop-grid.html" className="default-btn border-radius-5"
                  >Shop Now</a
                  >
                  <div className="product-banner-card-img">
                    <Image width={200} height={200}
                      src="/images/product-banner/product-banner-img7.png"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div className="product-banner-card-two">
                  <h3>Find Daily Groceries and Others</h3>
                  <a href="shop-grid.html" className="default-btn border-radius-5"
                  >Shop Now</a
                  >
                  <div className="product-banner-card-img">
                    <Image width={200} height={200}
                      src="/images/product-banner/product-banner-img8.png"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flash-sale-area-two pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Flash Sale</h2>
              <a href="#" className="view-btn">View All</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-md-6">
                <div className="flash-sale-card">
                  <div className="flash-sale-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/flash-sale/flash-sale-img9.png"
                        alt="Images"
                      />
                    </a>
                    <div className="flash-tag"><b>50%</b>Off</div>
                    <i className="las la-heart"></i>
                    <div id="timer">
                      <div id="days"></div>
                      <div id="hours"></div>
                      <div id="minutes"></div>
                      <div id="seconds"></div>
                    </div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Oil Pack</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Smart Product</p>
                    <span><del>$1200</del> $600</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="flash-sale-card">
                  <div className="flash-sale-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/flash-sale/flash-sale-img10.png"
                        alt="Images"
                      />
                    </a>
                    <div className="flash-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Hair Shampoo</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Smart Product</p>
                    <span><del>$800</del> $700</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="flash-sale-card">
                  <div className="flash-sale-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/flash-sale/flash-sale-img11.png"
                        alt="Images"
                      />
                    </a>
                    <div className="flash-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Junk Food</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Smart Product</p>
                    <span><del>$90</del> $65</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="flash-sale-card">
                  <div className="flash-sale-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/flash-sale/flash-sale-img12.png"
                        alt="Images"
                      />
                    </a>
                    <div className="flash-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Coconut Oil</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Smart Product</p>
                    <span><del>$80</del> $55</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>How It Works</h2>
              <a href="#" className="view-btn">View All</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-4 col-sm-6">
                <div className="work-card">
                  <div className="number">01</div>
                  <div className="work-icon">
                    <i className="flaticon-online-order"></i>
                    <h3>Order</h3>
                  </div>
                  <p>
                    Choose any product and order your favorite products online
                    Choose any product
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="work-card">
                  <div className="number">02</div>
                  <div className="work-icon">
                    <i className="flaticon-grocery"></i>
                    <h3>Assistant</h3>
                  </div>
                  <p>
                    Choose any product and order your favorite products online
                    Choose any product
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                <div className="work-card">
                  <div className="number">03</div>
                  <div className="work-icon">
                    <i className="flaticon-delivery-truck"></i>
                    <h3>Deliver</h3>
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

        <div className="all-product-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>All Products</h2>
              <a href="#" className="view-btn">View All</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style5.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Doritos Chips</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.4)
                    </div>
                    <p>Grocery Product</p>
                    <span>$150</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style6.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">CocaCola</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.1)
                    </div>
                    <p>Grocery Product</p>
                    <span>$40</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style7.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Mango</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Grocery Product</p>
                    <span>$140</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style8.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">River Fish</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Grocery Product</p>
                    <span>$180</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style9.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Fresh Vegetable</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.4)
                    </div>
                    <p>Grocery Product</p>
                    <span>$100</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style10.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Vichy Care</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Grocery Product</p>
                    <span>$190</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style11.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Dettol</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Grocery Product</p>
                    <span>$70</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="all-product-card">
                  <div className="all-product-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/all-product/all-product-style12.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Dettol</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.9)
                    </div>
                    <p>Grocery Product</p>
                    <span>$80</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bakery-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Bakery Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/bakery-product/bakery-product-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Bun Cake</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Bakery Product</p>
                    <span>$200</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/bakery-product/bakery-product-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Bread Cake</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Bakery Product</p>
                    <span>$120</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/bakery-product/bakery-product-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">White Bread</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Bakery Product</p>
                    <span>$30</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/bakery-product/bakery-product-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Boker Cake</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Bakery Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="supplements-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Supplement Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Turkey Meat</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Supplement Product</p>
                    <span>$200</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">River Fish</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Supplement Product</p>
                    <span>$120</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Fresh Chicken</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Supplement Product</p>
                    <span>$30</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Chicken Wings</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Supplement Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img5.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Fresh Meat</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.9)
                    </div>
                    <p>Supplement Product</p>
                    <span>$350</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img6.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Cow Rib</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.9)
                    </div>
                    <p>Supplement Product</p>
                    <span>$350</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img7.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Egg</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Supplement Product</p>
                    <span>$10</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/supplements-product/supplements-img8.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Butter</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Supplement Product</p>
                    <span>$15</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fruits-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Fruit Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/fruites-product/fruites-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Pineapple</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Fruits Product</p>
                    <span>$200</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/fruites-product/fruites-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Dragon Fruit</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Fruits Product</p>
                    <span>$120</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/fruites-product/fruites-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Fresh Guava</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Fruits Product</p>
                    <span>$30</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/fruites-product/fruites-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Papaya</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Fruits Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="beauty-care-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Beauty & Care Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Karley Care</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Beauty Product</p>
                    <span>$200</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Nevia Soft</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Beauty Product</p>
                    <span>$120</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Vichy Care</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Beauty Product</p>
                    <span>$130</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Facial Oil</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Beauty Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img5.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Aloe Vera Leaf</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.9)
                    </div>
                    <p>Beauty Product</p>
                    <span>$350</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img6.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Oriflame Care</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.9)
                    </div>
                    <p>Beauty Product</p>
                    <span>$250</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img7.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Hair Shampoo</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Beauty Product</p>
                    <span>$100</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/beauty-care-product/beauty-care-img8.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Oil Pack</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Beauty Product</p>
                    <span>$150</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="diary-product-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Diary Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/diary-product/diary-product-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Milky Drinks</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Diary Product</p>
                    <span>$100</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/diary-product/diary-product-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Cheese</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Diary Product</p>
                    <span>$120</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/diary-product/diary-product-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Milk Pack</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Diary Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/diary-product/diary-product-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Butter</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Diary Product</p>
                    <span>$70</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="drinks-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Drink Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/drinks-product/drinks-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Pepsi Can</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Drinks Product</p>
                    <span>$200</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/drinks-product/drinks-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Water Pack</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Drinks Product</p>
                    <span>$20</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/drinks-product/drinks-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Water Bottle</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Drinks Product</p>
                    <span>$30</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/drinks-product/drinks-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Can Package</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Drinks Product</p>
                    <span>$50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="personal-hygiene-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Personal Hygiene Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/personal-hygiene/personal-hygiene-img1.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">ToothBrush</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Personal Product</p>
                    <span>$10</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/personal-hygiene/personal-hygiene-img2.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Mouth Wash</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Personal Product</p>
                    <span>$20</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/personal-hygiene/personal-hygiene-img3.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Colgate Pack</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.7)
                    </div>
                    <p>Personal Product</p>
                    <span>$35</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-card">
                  <div className="product-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/personal-hygiene/personal-hygiene-img4.png"
                        alt="Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Bleach</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Personal Product</p>
                    <span>$40</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-area-two pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Special Offer Products</h2>
              <a href="#" className="view-btn">View More</a>
            </div>
            <div className="row pt-45">
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img1.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Pineapple</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.2)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$80</del> $70</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img2.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Karley Care</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.4)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$120</del> $110</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img3.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Egg</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$12</del> $10</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img4.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">River Fish</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$70</del> $50</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img5.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Butter</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.5)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$80</del> $60</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img6.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Colgate</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.6)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$50</del> $40</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img7.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Coca-cola</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.8)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$15</del> $10</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="offer-card">
                  <div className="offer-card-img">
                    <a href="shop-details.html">
                      <Image width={200} height={200}
                        src="/images/offer-product/offer-product-img8.png"
                        alt="Images"
                      />
                    </a>
                    <div className="offer-card-tag"><b>50%</b>Off</div>
                  </div>
                  <div className="content">
                    <h3><a href="shop-details.html">Mango</a></h3>
                    <div className="rating-tag">
                      <i className="las la-star"></i>
                      (4.3)
                    </div>
                    <p>Offer Product</p>
                    <span><del>$35</del> $30</span>
                    <a href="#" className="add-card"><i className="las la-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="client-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Customer Review</h2>
              <a href="#" className="view-btn">View All</a>
            </div>
            <div className="client-slider owl-carousel owl-theme pt-45">
              <div className="client-item">
                <Image width={200} height={200} src="/images/client-img/client-img1.png" alt="Images" />
                <h3>Thomas Debid</h3>
                <div className="quote-icon">
                  <i className="las la-quote-left"></i>
                </div>
                <div className="rating">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star-half-alt"></i>
                </div>
                <p>
                  Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                  edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate.
                </p>
              </div>
              <div className="client-item">
                <Image width={200} height={200} src="/images/client-img/client-img2.png" alt="Images" />
                <h3>Menvid Antham</h3>
                <div className="quote-icon">
                  <i className="las la-quote-left"></i>
                </div>
                <div className="rating">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star-half-alt"></i>
                </div>
                <p>
                  Vriel velit auctor aliquet. Aenean sollicitudin, lorem quis biben
                  edum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate.
                </p>
              </div>
              <div className="client-item">
                <Image width={200} height={200} src="/images/client-img/client-img3.png" alt="Images" />
                <h3>Elen Musk</h3>
                <div className="quote-icon">
                  <i className="las la-quote-left"></i>
                </div>
                <div className="rating">
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star"></i>
                  <i className="las la-star-half-alt"></i>
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
            <Image width={200} height={200} src="/images/client-img/client-shape.png" alt="Images" />
          </div>
        </div>



        <footer className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top pt-100 pb-70">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index-2.html">
                        <Image width={200} height={200} src="/images/logo.png" alt="Images" />
                      </a>
                    </div>
                    <p>
                      Gravida nibh vel velit auctor aliquet. Aenean sollicit thudin,
                      lorem the quis bibendum auctor, nisi elit consequat ipsum, nec
                      sem nibh id elit.
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="#"><i className="lab la-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="lab la-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="lab la-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="lab la-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget ml-30">
                    <h3>Quick Links</h3>
                    <ul className="footer-list">
                      <li>
                        <a href="shop.html"> New Collection </a>
                      </li>
                      <li>
                        <a href="shop.html"> Best Deal </a>
                      </li>
                      <li>
                        <a href="shop.html"> Discount & Offer </a>
                      </li>
                      <li>
                        <a href="shop.html"> Hot Sale </a>
                      </li>
                      <li>
                        <a href="shop.html"> All Products </a>
                      </li>
                      <li>
                        <a href="account.html"> Account </a>
                      </li>
                      <li>
                        <a href="#"> Wish List </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget ml-40">
                    <h3>Our Blog</h3>
                    <ul className="footer-blog">
                      <li>
                        <Image width={200} height={200}
                          src="/images/blog/footer-blog1.jpg"
                          alt="Images"
                        />
                        <div className="content">
                          <h3>
                            <a href="blog-details.html"
                            >Digital Light Invention by Denis</a
                            >
                          </h3>
                          <span>04 Dec 2020</span>
                        </div>
                      </li>
                      <li>
                        <Image width={200} height={200}
                          src="/images/blog/footer-blog2.jpg"
                          alt="Images"
                        />
                        <div className="content">
                          <h3>
                            <a href="blog-details.html">Product Selling Strategy</a>
                          </h3>
                          <span>07 Dec 2020</span>
                        </div>
                      </li>
                      <li>
                        <Image width={200} height={200}
                          src="/images/blog/footer-blog3.jpg"
                          alt="Images"
                        />
                        <div className="content">
                          <h3>
                            <a href="blog-details.html"
                            >Find the Best Product in Market</a
                            >
                          </h3>
                          <span>10 Dec 2020</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget pl-5">
                    <h3>Contact Us</h3>
                    <ul className="footer-address">
                      <li>
                        <i className="las la-map-marker"></i>
                        <div className="content">
                          <h3>6B Green Hill, Barista, USA</h3>
                          <span>Our Location</span>
                        </div>
                      </li>
                      <li>
                        <i className="las la-phone"></i>
                        <div className="content">
                          <h3><a href="tel:+1-432-675-896">+1 432 675 896</a></h3>
                          <span>Phone Number</span>
                        </div>
                      </li>
                      <li>
                        <i className="lar la-envelope"></i>
                        <div className="content">
                          <h3>
                            <a
                              href="//email-protection#40292e262f002c2f2d2132346e232f2d"
                            ><span
                              className="__cf_email__"
                              data-cfemail="0d64636b624d6162606c7f79236e6260"
                            >example.com</span
                              ></a
                            >
                          </h3>
                          <span>Our Email</span>
                        </div>
                      </li>
                      <li>
                        <i className="las la-clock"></i>
                        <div className="content">
                          <h3>9 AM - 5 PM (7 Days)</h3>
                          <span>Open Hour</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right-area">
              <div className="copy-right-text">
                <p>
                  Copyright ©2021 Lomart. All Rights Reserved by
                  <a href="">Skera Theme</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
