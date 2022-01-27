import React from 'react';

export default function Aside(){
  return (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Linda 3.0</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Dimas D Robayo M</a>
        </div>
      </div>

      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Tablero
                <i className="right fas fa-angle-left" />
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
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
                  <a href="#" className="nav-link">
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
          <li className="nav-item">
            <a href="#" className="nav-link">
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
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon fas fa-truck" />
              <p>
                Pedidos
                <span className="badge badge-info right">6</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
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
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon fa fa-barcode" />
              <p>Inventario</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon fa fa-shopping-bag" />
              <p>
                Compras
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon fa fa-shopping-cart" />
              <p>
                Ventas
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
                <p>
                  Reporte
                  <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/editors.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Editors</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/validation.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Validation</p>
                </a>
              </li>
            </ul>
            <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon fa fa-book" />
              <p>
                Documentación
              </p>
            </a>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
)}