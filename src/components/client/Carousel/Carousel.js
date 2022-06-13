import React from 'react';
import {map} from 'lodash';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Carousel.css';
import { useSelector } from 'react-redux';
import articles from '../../../assets/storage/products/articles.jpg';

export default function Carousel() {
    const productsList = useSelector((state) => state.articlesList.articles);
    const { products } = productsList;
    
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <OwlCarousel
                        className="owl-theme"
                        items="6"
                        autoplay
                        loop
                        margin={20}
                    >
                        {map(products, (product, index) => (
                        <div className="item" key={index}>
                            <div 
                                className="categories__item cardProduct"
                            >
                                <img src={articles} height="100%" />
                                <h5>
                                    <a href="/">{product.productName.slice(1,10)}</a>
                                </h5>
                            </div>
                        </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}