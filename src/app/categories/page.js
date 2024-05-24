import React from 'react'
import { productByCategoriesInfo } from '../data/productByCategory'
import CategorySection from '../components/CategorySection'
function page() {
    return (
        <>
            <div class="inner-banner">
                <div class="container">
                    <div class="inner-title text-center">
                        <h3>Categories</h3>
                        <ul>
                            <li>
                                <a href="index-2.html">Home</a>
                            </li>
                            <li>
                                <i class="las la-angle-right"></i>
                            </li>
                            <li>Categories</li>
                        </ul>
                    </div>
                </div>
            </div>
            <CategorySection title="Bakery Products" products={productByCategoriesInfo.bakery} />
            <CategorySection title="Supplement Products" products={productByCategoriesInfo.supplements} />
            <CategorySection title="Fruit Products" products={productByCategoriesInfo.fruits} />
            <CategorySection title="Beauty & Care Products" products={productByCategoriesInfo.beautyAndCare} />
            <CategorySection title="Diary Products" products={productByCategoriesInfo.diary} />
        </>
    )
}

export default page