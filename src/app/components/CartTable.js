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
        <div className="cart-table table-responsive">

            <table className="table table-bordered">
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
                    {isEmpty === true ? <tr><td>No item</td></tr> : items.map((product, index) => (
                        <CartProductRow key={index} {...product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartTable