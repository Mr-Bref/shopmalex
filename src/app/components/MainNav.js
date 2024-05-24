'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link';
import { useCart } from "react-use-cart";

const itemsInfo = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Boutique',
        url: '/boutique'
    },
    {
        name: 'Categories',
        url: '/categories'
    },
    {
        name: 'Contact Nous',
        url: 'contactUs'
    }
];

function MainNav() {
    const [selectedNavItem, setSelectedNavItem] = useState('')
    const { totalUniqueItems } = useCart();


    return (
        <><div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" href="/">
                        <Image width={200} height={200} src="/images/logo.png" alt="Logo" />
                    </Link>
                    <div
                        className="collapse navbar-collapse mean-menu"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto">
                            {itemsInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className={selectedNavItem == item.name ? "nav-item active" : "nav-item"}
                                    onClick={() => {
                                        setSelectedNavItem(item.name)
                                    }}

                                >
                                    <Link href={item.url} className="nav-link">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="nav-side d-display">
                            <ul className="nav-side-item">
                                <li>
                                    <Link href="#" className="cart-btn">
                                        <i className="flaticon-envelope"></i>
                                        <span>1</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cart" className="cart-btn">
                                        <i className="flaticon-shopping-bag"></i>
                                        <span>{totalUniqueItems}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div></>
    )
}

export default MainNav