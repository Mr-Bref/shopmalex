import React from 'react'
import Image from 'next/image'
function Preloader() {
    return (
        <><div class="preloader">
            <div class="d-table">
                <div class="d-table-cell">
                    <Image height={100} alt="image" src="/images/preloder-img.png" width={100} />

                </div>
            </div>
        </div>
        </>
    )
}

export default Preloader