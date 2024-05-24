import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
const CartProductRow = ({ name, imageUrl, price, quantity, id }) => {
    const { removeItem } = useCart()
    return (
        <tr>
            <td className="product-thumbnail">
                <Link href="#">
                    <Image width={200} height={200} src={imageUrl} alt="Product" />
                </Link>
            </td>
            <td className="product-name">
                <Link href="#">{name}</Link>
            </td>
            <td className="product-price">
                <span className="unit-amount">${price.toFixed(2)}</span>
            </td>
            <td className="product-quantity">{quantity}</td>
            <td className="product-subtotal">
                <span className="subtotal-amount">${(price * quantity).toFixed(2)}</span>
                <span className="remove" onClick={() => removeItem(id)}><i className="las la-trash"></i></span>
            </td>
        </tr>
    );
};

export default CartProductRow;
