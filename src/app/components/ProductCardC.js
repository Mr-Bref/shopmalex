import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'
import CustomKkiaPayButton from './CustomKkiaPayButton'

function ProductCardC({ product }) {
    return (
        <div className="product-card">
            <div className="product-card-img">
                <a href={product.detailsUrl}>
                    <Image width={200} height={200} src={product.imageUrl} alt={product.name} />
                </a>
            </div>
            <div className="content">
                <h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3>
                <div className="rating-tag">
                    <i className="las la-star"></i>
                    ({product.rating})
                </div>
                <p>{product.category}</p>
                <span>${product.price}</span>
                <CustomKkiaPayButton amount={product.price} message={'buy'} />
                <AddToCartButton item={product} />
            </div>
        </div>
    )
}

export default ProductCardC