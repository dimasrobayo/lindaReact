import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                <Link to="/setting" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Configuración Sistema</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/top-nav-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Usuario del Sistema</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Banco</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Tipo de Cuenta</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Cuenta</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Tipo de Cliente</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/#" className="nav-link">
                    <i className="nav-icon fas fa-map-marker-alt" />
                        <p>
                            Ubicación
                            <i className="fas fa-angle-left right" />
                        </p>
                </Link>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <Link to="pages/forms/general.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Estados</p>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="pages/forms/advanced.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Municipios</p>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="pages/forms/editors.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Parroquias</p>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="pages/forms/validation.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Comunidades</p>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Categoria de Productos</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Almacenes</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Status de Ordenes</p>
                </Link>
            </li>
        </ul>
    </li>
  );
}
