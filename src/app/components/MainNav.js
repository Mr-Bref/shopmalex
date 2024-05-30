'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { useCart } from "react-use-cart";
import useAuth from '@/hooks/useAuth';

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
        name: 'Contactez Nous',
        url: 'contactUs'
    }
];

function MainNav() {
    const [selectedNavItem, setSelectedNavItem] = useState('')
    const { user, logout } = useAuth();


    const { totalUniqueItems } = useCart();


    return (
        <><div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" href="/" style={{ color: "black" }}>
                        Shop<span style={{ color: "#fb341f" }}>Malex</span>
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
                            <ul className="nav-side-item" id='right-nave-items'>
                                <li>
                                    <span>{user ? user.email : ''}
                                        {
                                            user ? (
                                                <button className='btn' onClick={logout}>Logout</button>
                                            ) : (
                                                <span className='container mt-3'>
                                                    <span className='row'>
                                                        <span className='col center'>
                                                            <span className='btn' type='button' >
                                                                <Link href="/register">S&rsquo; inscrire</Link>
                                                            </span>
                                                            <span className='btn' type='button' >
                                                                <Link href="/login">Se connecter</Link>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            )
                                        }
                                    </span>
                                </li>
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



