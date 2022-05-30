import React from 'react';

export default function Administrations() {
    return (
        <li className="nav-item">
            <a href="/#" className="nav-link">
              <i className="nav-icon fa fa-cubes" />
                <p>
                    Administración
                    <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/UI/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Pedidos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/icons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compras</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/buttons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ventas</p>
                </a>
              </li>
            </ul>
        </li>
    );
}
