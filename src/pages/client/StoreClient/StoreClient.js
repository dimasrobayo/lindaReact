import React from 'react';
import { Link } from 'react-router-dom';
import HeaderDetail from '../../../components/client/HeaderDetail';
import Asside from '../../../components/client/Asside';
import Colores from '../../../components/client/Colores';
import Size from '../../../components/client/Size';
import Prices from '../../../components/client/Prices';
import Carousel from '../../../components/client/Carousel';
import Products from '../../../components/client/Products';
import Filter from '../../../components/client/Filter/Filter';

export default function StoreClient() {
  return (
    <>
        <HeaderDetail 
            Title="Tienda - Ético y sustentable"
            LinkTitle="Inicio"
            LinkTo="/"
            Position="Tienda"
        />

        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <div className="sidebar">
                            <div className="sidebar__item">
                                <Asside />
                            </div>

                            <div className="sidebar__item">
                                <Prices />
                            </div>

                            <div className="sidebar__item sidebar__item__color--option">
                                <Colores />
                            </div>

                            <div className="sidebar__item">
                                <Size />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-7">
                        <div className="product__discount">
                            <div className="section-title product__discount__title">
                                <h2>Venta de descuento</h2>
                            </div>

                            <div>
                                <Carousel items="3" />
                            </div>
                        </div>

                        <div className="filter__item">
                            <div className="row">
                                <Filter />
                            </div>
                        </div>

                        <div className="row">
                            <Products />
                        </div>
                        <div className="product__pagination">
                            <Link to="/">1</Link>
                            <Link to="/">2</Link>
                            <Link to="/">3</Link>
                            <Link to="/"><i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
