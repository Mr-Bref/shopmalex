'use client'
import React from 'react'


import { useCart } from 'react-use-cart';

import CustomKkiaPayButton from './CustomKkiaPayButton'


function WrapperKkiaPayButton() {
    const {
        items,
    } = useCart();

    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return (
        <>
            <CustomKkiaPayButton
                name={'marihab'}
                amount={totalPrice}
                email={'marihabade@gmail.com'}
                message={'Payer'}
                description={'Achat'}
                className="default-btn btn-bg-three" />
        </>
    )
}

export default WrapperKkiaPayButton