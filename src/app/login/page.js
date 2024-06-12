'use client';

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';
export default function Login() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        motdepasse: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData.email, formData.motdepasse);
    };

    return (
        <div>
            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Connectez-vous</h3>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>Se connecter</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="user-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
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
                                    <h2>Se connecter</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12 ">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email" onChange={handleChange}
                                                        required
                                                        className="form-control"
                                                        data-error="Please enter your Username or Email"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        name="password"
                                                        placeholder="Mot de passe"
                                                        onChange={handleChange}
                                                        required
                                                        className="form-control"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 form-condition">
                                                <div className="agree-label">
                                                    <input type="checkbox" id="chb1" />
                                                    <label htmlFor="chb1">
                                                        Se rappeler de moi
                                                        <Link className="forget" href="forget-password.html">
                                                            Mot de pass Oublié?</Link>

                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 ">
                                                <button type="submit" className="default-btn btn-bg-three">Se connecter</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}