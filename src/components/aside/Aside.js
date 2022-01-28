import React from 'react';
import Administrations from './nav/Administrations';
import Documents from './nav/Documents';
import Inventarys from './nav/Inventarys';
import Orders from './nav/Orders';
import Profile from './nav/Profile';
import Reports from './nav/Reports';
import Sales from './nav/Sales';
import Search from './nav/Search';
import Settings from './nav/Settings';
import Shopping from './nav/Shopping';
import Stadistics from './nav/Stadistics';
import Widgets from './nav/Widgets';

export default function Aside(){
  return (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Linda 3.0</span>
    </a>
    <div className="sidebar">
      <Profile />

      <Search />

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <a href="/#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Tablero
                <i className="right fas fa-angle-left" />
              </p>
            </a>
          </li>
          {/* SESSION WIDGETS */}
          <Widgets />
          {/* SESSION SETTINGS */}
          <Settings />
          {/* SESSION STADISTICS */}
          <Stadistics />
          {/* SESSION ORDERS */}
          <Orders />
          {/* SESSION ADMINISTRATION */}
          <Administrations />
          {/* SESSION INVENTARY */}
          <Inventarys />
          {/* SESSION SHOPPING */}
          <Shopping />
          {/* SESSION SALES */}
          <Sales />
          {/* SESSION REPORTS */}
          <Reports />
          {/* SESSION DOCUMENTS */}
          <Documents />
        </ul>
      </nav>
    </div>
  </aside>
)}