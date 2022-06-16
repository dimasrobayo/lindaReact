import React from 'react';
import Banner from '../../../components/client/Banner';
import Carousel from '../../../components/client/Carousel';
import Products from '../../../components/client/Products';
import Promotion from '../../../components/client/Promotion';
import Tags from '../../../components/client/Products/Tags';

export default function HomeClient() {
  return (
    <div>
        <Banner />

        <section className="categories">
            <div className="container">
                <Carousel items="6" />
            </div>
        </section>

        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Tags title="Productos destacados" />
                    </div>
                </div>

                <div>
                    <Products />
                </div>
            </div>
        </section>

        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="img/banner/banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="img/banner/banner-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Promotion />
    </div>
  )
}
