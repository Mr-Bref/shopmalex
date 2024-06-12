'use client';

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';

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
    <>

      <div className="inner-banner">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Inscrivez-vous</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="las la-angle-right"></i>
              </li>
              <li>S&rsquo; inscrire</li>
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
                  width={540}
                  height={400}
                  className='img-responsive'
                  src="/images/fruits.jpg"
                  alt="Images"
                  objectFit={'cover'}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="user-form">
                <div className="contact-form">
                  <h2>Inscrivez-vous</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input
                            name="prenom"
                            type="text"
                            className="form-control"
                            required
                            data-error="Veillez entrer votre prenom"
                            placeholder="Prenom"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input
                            name="nompers"
                            type="text"
                            className="form-control"
                            required
                            data-error="Veillez entrer votre nom"
                            placeholder="Nom"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            required
                            data-error="Veillez entrer votre adresse Email"
                            placeholder="Email"
                            onChange={handleChange}
                            name='email'
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <button
                          type="submit"
                          className="default-btn btn-bg-three"
                        >
                          S&rsquo; inscrire
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="account-desc">
                          Vous avez déja un compt?{"  "}
                          <Link href="/login">Connectez-vous</Link>
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
    </>
  );
}

