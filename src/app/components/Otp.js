import React, { useState, useRef } from 'react';

function OTPInput() {
    const [otp, setOtp] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        // Check if the entered value is a number
        if (!isNaN(event.target.value)) {
            setOtp(event.target.value);
            if (event.target.value.length === 6) {
                // Submit OTP or perform other actions
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                value={otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                maxLength={6}
                pattern="[0-9]*"
            />
        </div>
    );
}

export default OTPInput;
