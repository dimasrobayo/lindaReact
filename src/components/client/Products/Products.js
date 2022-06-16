import React from 'react';
import {map} from 'lodash';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Products() {
    const productsList = useSelector((state) => state.articlesList.articles);
    const { products } = productsList;

    return (
        <div className="row featured__filter">
            {map(products, (product, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 cardProduct" key={index}>
                    <Link to="/ProductDetail">
                        <div className="featured__item">
                            <div 
                                className="featured__item__pic set-bg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li><a href="/"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="/"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a title={product.productName}>
                                        {product.productName.slice(0,25)}
                                    </a>
                                </h6>
                                <h5>${product.price}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
