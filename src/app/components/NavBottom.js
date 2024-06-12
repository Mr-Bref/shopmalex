import React from 'react'
import Image from 'next/image'
import NavbarCategory from './NavbarCategory'
import AllScript from './AllScript'
function NavBottom() {
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <NavbarCategory />
                    <div className="col-lg-6 col-md-7">
                        <div className="top-header-form">
                            <form className="nav-bottom-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group search-form">
                                            <input className="form-control" placeholder="Recherchez un produit" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>
                                                    Categories
                                                </option>
                                                <option>
                                                    Electronics
                                                </option>
                                                <option>
                                                    Baby &amp; Toddler
                                                </option>
                                                <option>
                                                    Clothing &amp; Shoes
                                                </option>
                                                <option>
                                                    Health &amp; Beauty
                                                </option>
                                                <option>
                                                    Entertainment &amp; Arts
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <button type="submit">
                                            <i className="flaticon-searching">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    </div>
                </div>
            </div>
            <AllScript />
        </>

    )
}

export default NavBottom