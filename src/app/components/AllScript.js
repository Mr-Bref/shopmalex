'use client'
import Script from 'next/script'

function AllScript({ hostname }) {

    const baseurl = `../assets/js/`
    return (
        <>
            <Script
                src={`${baseurl}jquery-3.5.1.slim.min.js`}
                strategy="afterInteractive"
                id='jquery'
            />
            <Script
                src={`${baseurl}bootstrap.bundle.min.js`}
                strategy="afterInteractive"
                id='bootdtrap'
            />
            <Script
                src={`${baseurl}owl.carousel.min.js`}
                strategy="afterInteractive"
                id='owlcarousel'
            />
            <Script
                src={`${baseurl}jquery.magnific-popup.min.js`}
                strategy="afterInteractive"
                id='jquery-popup'
            />
            <Script
                src={`${baseurl}jquery.nice-select.min.js`}

                id='niceselect'
            />
            <Script
                src={`${baseurl}wow.min.js`}
                strategy="afterInteractive"
                id='wowmin'
            />
            <Script
                src={`${baseurl}meanmenu.js`}
                strategy="afterInteractive"
                id='meanmenu'
            />
            <Script
                src={`${baseurl}slick.min.js`}
                strategy="afterInteractive"
                id='slick'
            />
            <Script
                src={`${baseurl}jquery.ajaxchimp.min.js`}
                strategy="afterInteractive"
                className='ajaxchimp'
            />
            <Script
                src={`${baseurl}form-validator.min.js`}
                strategy="afterInteractive"
                id='form-validator'
            />
            <Script
                src={`${baseurl}jquery.validate.js`}
                strategy="afterInteractive"
                id='validate'
            />
            <Script
                src={`${baseurl}jquery-ui.min.js`}
                strategy="afterInteractive"
                id='jqueryiui'
            />
            <Script
                src={`${baseurl}mixitup.min.js`}
                strategy="afterInteractive"
                id='mixitup'
            />
            <Script
                src={`${baseurl}custom.js`}
                strategy="afterInteractive"
                id='customjs'
            />
        </>
    )
}

export default AllScript