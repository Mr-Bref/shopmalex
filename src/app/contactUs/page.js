import React from 'react'
import ContactUsForm from '../components/ContactUsForm'

function page() {
  return (
    <>
      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Contactez Nous</h3>
            <ul>
              <li> <a href="/">Home</a> </li>
              <li> <i className="las la-angle-right"></i> </li>
              <li>Contactez Nous</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-form-area pt-100 pb-70">
        <div className="container">
          <div className="contact-form-title text-center">
            <h2>We are Available to Help You</h2>
            <p> Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
          </div>
          <div className="row pt-45">
            <div className="col-lg-12">
              <div className="contact-form">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page