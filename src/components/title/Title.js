import React from 'react';
import { Link } from 'react-router-dom';

export default function Title(props) {
    const { title, route, position } = props

    return (
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">{title}</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            <Link to="/">{route}</Link>{position}
                        </li>
                        <li className="breadcrumb-item active">Tablero v3</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
