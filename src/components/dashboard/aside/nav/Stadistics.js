import React from 'react';

export default function Stadistics() {
    return (
        <li className="nav-item">
            <a href="/#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                    Estadisticas
                    <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General de Ventas</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Estadisticas Ventas</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General de Compras</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/uplot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Estadisticas Proveedor</p>
                </a>
              </li>
            </ul>
        </li>
    );
}
