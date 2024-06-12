'use client'
import React from 'react'
import { useCart } from 'react-use-cart'
useCart
function AddToCartButton({ item }) {
    const { addItem } = useCart()
    return (
        <span
            className='add-card'
            onClick={() => addItem(item)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }}>
            <i className="las la-plus" ></i>
        </span>
    )
}

export default AddToCartButton