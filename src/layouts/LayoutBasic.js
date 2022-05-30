import React from 'react';
import Aside from '../components/dashboard/aside/Aside';
import Footer from '../components/dashboard/footer/Footer';
import Header from '../components/dashboard/header/Header';

export default function LayoutBasic(props) {
    const {children} = props;

    return (
        <div className="wrapper">
            <Header />
            <Aside />
            <>
                {children}
            </>
            <Footer />
        </div>
    )
}
