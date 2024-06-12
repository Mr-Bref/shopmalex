'use client';

import TabContent from '@/app/components/TabContent';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../tempstyle.css'
import '@/app/assets/css/bootstrap.min.css'
import '@/app/assets/css/style.css'
import { useCart } from 'react-use-cart'

const ProductDetail = ({ params }) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('Reviews');
    const [value, setValue] = useState('');
    const baseUrl = '/images/products';
    const { addItem } = useCart()
    const productId = params.productId;
    const handleNumberChange = (e) => {
        const newValue = e.target.value;
        if (newValue === '') {
            setValue('');
            return;
        }

        const parsedValue = parseFloat(newValue);

        if (!isNaN(parsedValue) && parsedValue >= 0.5 && parsedValue <= 100) {
            const parts = newValue.split('.');
            if (parts.length === 1 || (parts.length === 2 && parts[1].length <= 2)) {
                setValue(newValue);
            }
        }
    };

    useEffect(() => {
        if (productId) {
            fetch(`/api/product/${productId}`)
                .then(response => response.json())
                .then(data => {
                    setProduct(data.product);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching product details:', error);
                    setLoading(false);
                    setError(true);
                });
        }
    }, [productId]);

    const images = product?.images;

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <Image
                        src={`/images${images[i].url}`}
                        alt={images[i].label}
                        width={100}
                        height={100}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    return (
        <div>
            <div className='container'>
                <div classname="inner-banner">
                    <div classname="container">
                        <div classname="inner-title text-center">
                            <h3>Shop Details</h3>
                            <ul>
                                <li>
                                    <link href='/' />Home
                                </li>
                                <li>
                                    <i classname="las la-angle-right" />
                                </li>
                                <li>Details</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="shop-details-area pt-100 pb-70">
                    <div className="container">
                        <div className="shop-details-desc">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            {product.images.map((image, i) => (
                                                <div key={i}>
                                                    <Image
                                                        src={`/images${image.url}`}
                                                        alt={image.libelle}
                                                        width={500}
                                                        height={500}
                                                        sizes="33vw"

                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="shop-desc-content">
                                        <span>{product.category}</span>
                                        <h3>{product.name}</h3>
                                        <div className="shop-desc-list">
                                            <div className="shop-desc-review">
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    <i className="las la-star"></i>
                                                    <i className="las la-star"></i>
                                                    <i className="las la-star"></i>
                                                    <i className="las la-star-half-alt"></i>
                                                </div>
                                                <a href="#" className="rating-count">18 Ratings</a>
                                            </div>
                                            <div className="shop-desc-share-list">

                                            </div>
                                        </div>


                                        <h4>{product.price} F CFA</h4>
                                        <div className="input-count-area">
                                            <h3>Quantité</h3>
                                            <input
                                                className='quantity'
                                                style={{ textAlign: 'center', border: "none", outline: "none" }}
                                                type="number"
                                                value={value}
                                                onChange={handleNumberChange}
                                                min="0.5"
                                                max="100"
                                                step="0.01"
                                                placeholder="en"
                                            /><b>kg</b>
                                        </div>
                                        <div className="shop-add-btn">
                                            <button type="submit" className="default-btn default-bg-color border-radius-5">Acheter</button>
                                            <button type="submit" className="default-btn border-radius-5" onClick={() => addItem(product)}>Ajouter au Panier</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-tab pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div>
                                    <ul className="nav justify-content-center">
                                        {/* <li
                                            style={{ cursor: 'pointer' }}
                                            className={activeTab === 'Specifications' ? 'active nav-item nav-link' : 'nav-item nav-link'}
                                            onClick={() => setActiveTab('Specifications')}
                                        >
                                            Caractéristiques
                                        </li> */}
                                        <li
                                            style={{ cursor: 'pointer' }}
                                            className={activeTab === 'Reviews' ? 'active nav-item nav-link' : 'nav-item nav-link'}
                                            onClick={() => setActiveTab('Reviews')}
                                        >
                                            Avis
                                        </li>
                                    </ul>
                                    <TabContent activeTab={activeTab} productId={productId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-product-area pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Recommended Products for You</h2>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img1.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                                <i className="las la-heart"></i>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">Lamp Light</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.5)
                                                </div>
                                                <span>$200 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img2.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">Air Cooler</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.1)
                                                </div>
                                                <span>$300 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img3.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">Refrigerator</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.3)
                                                </div>
                                                <span>$400 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img4.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">Apple Watch</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.6)
                                                </div>
                                                <span>$140 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img5.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">Projector</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.4)
                                                </div>
                                                <span>$340 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="all-product-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-5 pr-0">
                                            <div className="all-product-img">
                                                <Link href="shop-details.html">
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src="/images/all-product/all-product-img6.png"
                                                        alt="Images"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7">
                                            <div className="all-product-content">
                                                <h3><Link href="shop-details.html">iPhone X</Link></h3>
                                                <div className="rating">
                                                    <i className="las la-star"></i>
                                                    (4.7)
                                                </div>
                                                <span>$1000 </span>
                                                <Link href="shop-details.html" className="add-cart-btn"
                                                ><i className="las la-plus"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};
export default ProductDetail;