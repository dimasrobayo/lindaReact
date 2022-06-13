import React from 'react';
import {map} from 'lodash';
import { articlesList } from '../../../Store/Slices/articlesListSlice';
import { useSelector } from 'react-redux';

export default function Products() {
    const productsList = useSelector((state) => state.articlesList.articles);
    const { products, tags } = productsList;

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Productos destacados</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">Todo</li>
                                {map(tags, (tag, index) => (
                                     <li data-filter={tag.slug} key={index}>{tag.tagName}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {map(products, (product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 modamujeres" key={index}>
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
                                    <h6><a href="/" title={product.productName}>{product.productName.slice(0,25)}</a></h6>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
