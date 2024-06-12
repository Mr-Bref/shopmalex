import Image from 'next/image'
import React from 'react'
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'
import CustomKkiaPayButton from './CustomKkiaPayButton'

function ProductCardC({ product }) {
    console.log(product)
    if (!product || !product.images || product.images.length === 0) {
        return <div>Chargement...</div>;
    }
    return (
        <div className="product-card">
            <div className="product-card-img">
                <a href={product.detailsUrl}>
                    <Image
                        width={200}
                        height={200}
                        style={{ objectFit: 'cover' }}
                        src={`/images${product['images'][0].url}`}
                        alt={product.name} />
                </a>
            </div>
            <div className="content">
                <h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3>
                <div className="rating-tag">
                    <i className="las la-star"></i>
                    ({product.rating || 3})
                </div>
                <span>{product.price} F CFA</span>
                <CustomKkiaPayButton amount={product.price || 25} message={'Acheter'} />
                <AddToCartButton item={product} />
            </div>
        </div>
    )
}

export default ProductCardC