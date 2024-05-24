'use client'
import React from 'react'
import Script from 'next/script'

function AllScript() {
    return (
        <>
            <Script
                src="../assets/js/jquery-3.5.1.slim.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/owl.carousel.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/jquery.magnific-popup.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/jquery.nice-select.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/wow.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/meanmenu.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/slick.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/jquery.ajaxchimp.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/form-validator.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/jquery.validate.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/jquery-ui.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/mixitup.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="../assets/js/custom.js"
                strategy="afterInteractive"
            />
        </>
    )
}

export default AllScript