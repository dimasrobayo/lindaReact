import React from 'react';

export default function Settings() {
    return (
    <li className="nav-item">
        <a href="/#" className="nav-link">
        <i className="nav-icon fas fa-copy" />
        <p>
            Configuraciones
            <i className="fas fa-angle-left right" />
        </p>
        </a>
        <ul className="nav nav-treeview">
        <li className="nav-item">
            <a href="pages/layout/top-nav.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Configuración Sistema</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Usuario del Sistema</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/boxed.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Banco</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Tipo de Cuenta</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Cuenta</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-topnav.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Tipo de Cliente</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="/#" className="nav-link">
                <i className="nav-icon fas fa-map-marker-alt" />
                <p>
                Ubicación
                <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
                <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Estados</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Municipios</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="pages/forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Parroquias</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="pages/forms/validation.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Comunidades</p>
                </a>
                </li>
            </ul>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-topnav.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Categoria de Productos</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-topnav.html" className="nav-link">
            <i className="far fa-circle nav-icon" />
            <p>Almacenes</p>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/layout/fixed-topnav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Status de Ordenes</p>
            </a>
        </li>
        </ul>
    </li>
  );
}
