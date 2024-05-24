'use client';

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Register() {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        nompers: '',
        prenom: '',
        email: '',
        motdepasse: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(formData.nompers, formData.prenom, formData.email, formData.motdepasse);
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nompers" placeholder="Nom" onChange={handleChange} required />
                <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="motdepasse" placeholder="Mot de passe" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}


<div className="inner-banner">
  <div className="container">
    <div className="inner-title text-center">
      <h3>Register</h3>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <i className="las la-angle-right"></i>
        </li>
        <li>S'inscrire</li>
      </ul>
    </div>
  </div>
</div>

<div className="user-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="user-img">
          <Image
            width={200}
            height={200}
            src="/images/user-img.jpg"
            alt="Images"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="user-form">
          <div className="contact-form">
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required
                      data-error="Please enter your Username"
                      placeholder="Enter Your Username"
                      onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      required
                      data-error="Please enter your Username or Email"
                      placeholder="Enter Your Email"
                      onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <button
                    type="submit"
                    className="default-btn btn-bg-three"
                  >
                    S'inscrire
                  </button>
                </div>
                <div className="col-12">
                  <p className="account-desc">
                    Already have an account?
                    <Link href="log-in.html">Log In</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>