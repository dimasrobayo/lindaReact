import React from 'react';
import language from '../../../assets/language.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <div className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li>
                                    <i className="fa fa-envelope"></i> soporte@eticoysustentable.cl
                                </li>
                                <li>Todos los envio gratis para este cyber day.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <Link to="/"><i className="fa fa-facebook"></i></Link>
                                <Link to="/"><i className="fa fa-twitter"></i></Link>
                                <Link to="/"><i className="fa fa-linkedin"></i></Link>
                                <Link to="/"><i className="fa fa-pinterest-p"></i></Link>
                            </div>
                            <div className="header__top__right__language">
                                <img src={language} alt="" />
                                <div>Español</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><Link to="/">Español</Link></li>
                                    <li><Link to="/">English</Link></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <Link to="/dashboard">
                                    <i className="fa fa-user"></i> Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <Link to="/">
                            <img src="img/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li>
                                <Link to="/">INICIO</Link>
                            </li>
                            <li>
                                <Link to="/store">TIENDA</Link>
                            </li>
                            <li>
                                <a>MIS COMPRAS</a>
                                <ul className="header__menu__dropdown">
                                    <li><Link to="/ProductDetail">Detalle Compra</Link></li>
                                    <li><Link to="/ShopingCart">Carro de compra</Link></li>
                                    <li><Link to="/Checkout">Checkout</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">CONTACTANOS</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li>
                                <Link to="/ShopingCart">
                                    <i className="fa fa-shopping-bag"></i> <span>3</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="header__cart__price">Articulo: <span>$150.000</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </div>
    )
}