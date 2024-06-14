'use client'
import { useState } from "react"
function StarRating({ setRate, rating, disabled }) {

    function handleClick(i) {
        if (disabled) return
        setRate(i)
    }

    const Stars = () => {
        let stars = [];

        for (let i = 0; i < 5; i++) {

            let isActive = rating >= i + 1


            stars.push(
                <div
                    key={i}
                    className={`star ${isActive && "active"} ${disabled && "disabled"} `}
                    onClick={() => handleClick(i + 1)}

                >
                    {isActive ? <>&#9733;</> : <>&#9734;</>}
                </div>
            )
        }
        return stars
    }

    return (
        <div className="rating-container">
            <Stars />
        </div>
    )
}

export default StarRating