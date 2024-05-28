import React from 'react'

function NavbarCategory() {
    return (
        <div className="col-lg-3">
            <div className="navbar-category">
                <ul className="navbar-nav">
                    <li className="nav-item-link">
                        <a href="#" className="nav-link-item">
                            <i className="las la-bars"></i>
                            Catégories
                            <i className="las la-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Céréales et Grains
                                </a>
                            </li>

                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Fruits
                                </a>
                            </li>
                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Légumes
                                </a>
                            </li>
                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Légumineuses
                                </a>
                            </li>
                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Oléqgineux
                                </a>
                            </li>
                            <li className="nav-item-link">
                                <a href="#" className="nav-link-item">
                                    Tubercules
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarCategory