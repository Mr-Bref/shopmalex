import React from 'react'
import Image from 'next/image'
function Preloader() {
    return (
        <><div className="preloader">
            <div className="d-table">
                <div className="d-table-cell">
                    <Image height={100} alt="image" src="/images/preloder-img.png" width={100} />

                </div>
            </div>
        </div>
        </>
    )
}

export default Preloader