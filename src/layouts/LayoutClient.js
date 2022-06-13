import React, { useEffect } from 'react';
import Header from '../components/client/Header';
import Footer from '../components/client/Footer';
import { articlesList } from '../Store/Slices/articlesListSlice';
import { useDispatch } from 'react-redux';

export default function LayoutClient(props) {
    const {children} = props;
    const dispatch = useDispatch();
  
    useEffect(() => {
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

        dispatch(articlesList(data))
    }, []);

    return (
        <div className="wrapper">
            <Header />

            <>
                {children}
            </>

            <Footer />
        </div>
    )
}
