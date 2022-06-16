import React, { useState, useEffect } from 'react';
import {map} from 'lodash';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Carousel.css';
import { useSelector } from 'react-redux';
import articles from '../../../assets/storage/products/articles.jpg';

export default function Carousel(props) {
    const { items } = props
    const [getItems, setGetItems] = useState(items)
    const productsList = useSelector((state) => state.articlesList.articles);
    const { products } = productsList;

    useEffect(() => {
        if (!items) {
            const date = new Date();
            setGetItems(items);
        }
    }, [items]);
    
    return (
        <OwlCarousel
            className="owl-theme"
            items={ getItems }
            autoplay
            loop
            margin={20}
        >
            {map(products, (product, index) => (
            <div className="item" key={index}>
                <Link to="/ProductDetail">
                    <div 
                        className="categories__item cardProduct"
                    >
                        <img src={articles} height="100%" alt="articles" />
                        <h6>
                            <a href="/">{product.productName.slice(1,10)}</a>
                        </h6>
                    </div>
                </Link>
            </div>
            ))}
        </OwlCarousel>
    )
}