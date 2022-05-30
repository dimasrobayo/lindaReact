import React from 'react';
import {map} from 'lodash';

export default function Products() {
    const data = {
        products: [
            {
                id: 1,
                productName: 'Colgantes con base de picos de botellas y atrapa sueños colgando.',
                path: '../../../assets/storage/products',
                image: 'product-1.jpg',
                tag: ['modamujeres', 'bisuteria']
            },
            {
                id: 2,
                productName: 'Bolsas reutilizables',
                path: '../../../assets/storage/products',
                image: 'product-2.jpg',
                tag: ['modamujeres'],
                price: 5000
            },
            {
                id: 3,
                productName: 'Cosmetiquero',
                path: '../../../assets/storage/products',
                image: 'product-3.jpg',
                tag: ['modamujeres'],
                price: 7500
            },
            {
                id: 4,
                productName: 'Delantales cocina Mujer',
                path: '../../../assets/storage/products',
                image: 'product-4.jpg',
                tag: ['modamujeres'],
                price: 15000
            },
            {
                id: 5,
                productName: 'Bandanas y collares',
                path: '../../../assets/storage/products',
                image: 'product-5.jpg',
                tag: ['mascotas'],
                price: 8000
            },
            {
                id: 6,
                productName: 'NimbleToes Trail Mujer',
                path: '../../../assets/storage/products',
                image: 'product-6.jpg',
                tag: ['modamujeres', 'calzado'],
                price: 139990
            },
            {
                id: 7,
                productName: 'Colgantes y atrapa sueños.',
                path: '../../../assets/storage/products',
                image: 'product-7.jpg',
                tag: ['modamujeres'],
                price: 10000
            },
            {
                id: 8,
                productName: 'Polera Talla M-L',
                path: '../../../assets/storage/products',
                image: 'product-8.jpg',
                tag: ['modamujeres'],
                price: 5000
            },
            {
                id: 9,
                productName: 'Rolls de Pizza',
                path: '../../../assets/storage/products',
                image: 'product-9.jpg',
                tag: ['alimentos'],
                price: 5000
            },
            {
                id: 10,
                productName: 'Hamburguesas Veganas Premium Obsesión Osada',
                path: '../../../assets/storage/products',
                image: 'product-10.jpg',
                tag: ['modamujeres', 'bisuteria'],
                price: 3290
            },
            {
                id: 11,
                productName: 'Empanada Vegana Integral de Mozzarella',
                path: '../../../assets/storage/products',
                image: 'product-11.jpg',
                tag: ['Alimentos'],
                price: 4390
            },
            {
                id: 12,
                productName: 'Portamascarillas quirurgica',
                path: '../../../assets/storage/products',
                image: 'product-12.jpg',
                tag: ['modamujeres'],
                price: 3500
            }
        ],
        tags: [
            {
                id: 1,
                tagName: 'Moda Mujeres',
                slug: 'modamujeres'
            },
            {
                id: 2,
                tagName: 'Bisutería',
                slug: 'bisuteria'
            },
            {
                id: 3,
                tagName: 'Calzado',
                slug: 'calzado'
            },
            {
                id: 4,
                tagName: 'Mascotas',
                slug: 'mascotas'
            },
            {
                id: 5,
                tagName: 'Alimentos',
                slug: 'alimentos'
            }
        ],
    };
    
    const {tags, products} = data;

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
