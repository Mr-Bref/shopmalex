'use client'
import React from 'react'
import CartProductRow from './CartProductRow'
import { useCart } from 'react-use-cart'
function CartTable() {
    const {
        isEmpty,
        items,
    } = useCart();

    console.log(items, isEmpty)

    return (
        <><table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {isEmpty === true ? <span>No items added yet</span> : items.map((product, index) => (
                    <CartProductRow key={index} {...product} />
                ))}
            </tbody>
        </table></>
    )
}

export default CartTable