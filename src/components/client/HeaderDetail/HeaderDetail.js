import React from 'react';
import Search from '../Search';
import { Link } from 'react-router-dom';

export default function HeaderDetail(props) {
    const { Title, LinkTitle, LinkTo, Position } = props;
    return (
        <div>
            <div className="container">
                <div className="row">
                        <Search />
                </div>
            </div>

            <section className="hero breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{Title}</h2>
                        <div className="breadcrumb__option">
                        <Link to={LinkTo}>{LinkTitle}</Link>
                        <span>{Position}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
