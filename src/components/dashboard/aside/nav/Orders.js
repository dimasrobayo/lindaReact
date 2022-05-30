import React from 'react';

export default function Orders() {
    return (
        <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
                <i className="nav-icon fas fa-truck" />
                <p>
                    Pedidos
                    <span className="badge badge-info right">6</span>
                </p>
            </a>
        </li>
    );
}
