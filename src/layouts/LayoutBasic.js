import React from 'react';
import Aside from '../components/aside/Aside';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export default function LayoutBasic(props) {
    const {children} = props;

    return (
        <div class="wrapper">
            <Header />
            <Aside />
            <>
                {children}
            </>
            <Footer />
        </div>
    )
}
