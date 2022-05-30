import React from 'react';
import language from '../../../assets/language.png';

export default function Header() {
    return (
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> soporte@eticoysustentable.cl</li>
                                <li>Todos los envio gratis para este cyber day.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="/"><i className="fa fa-facebook"></i></a>
                                <a href="/"><i className="fa fa-twitter"></i></a>
                                <a href="/"><i className="fa fa-linkedin"></i></a>
                                <a href="/"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src={language} alt="" />
                                <div>Español</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="/">Español</a></li>
                                    <li><a href="/">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="/dashboard">
                                    <i className="fa fa-user"></i> Login
                                </a>
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
                        <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="./index.html">INICIO</a></li>
                            <li><a href="/">TIENDA</a></li>
                            <li><a href="/">MIS COMPRAS</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="/">Detalle Compra</a></li>
                                    <li><a href="/">Carro de compra</a></li>
                                    <li><a href="/">Verificar</a></li>
                                </ul>
                            </li>
                            <li><a href="./">CONTACTANOS</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">Articulo: <span>$150.000</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    )
}