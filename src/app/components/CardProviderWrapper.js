'use client'
import React from 'react'
import { CartProvider } from "react-use-cart";

function CardProviderWrapper({ children }) {
    return (
        <CartProvider>{children}</CartProvider>
    )
}

export default CardProviderWrapper