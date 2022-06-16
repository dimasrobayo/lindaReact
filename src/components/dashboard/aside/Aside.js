import React from 'react';
import { Link } from 'react-router-dom';
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
import favicon from '../../../assets/favicon.png'

export default function Aside(){
  return (
  <aside className="main-sidebar sidebar-master-primary elevation-4">
    <Link to="/" className="brand-link">
      <img src={favicon} alt="AdminLTE" className="brand-image img-circle elevation-3" />
      <span className="brand-text font-weight-light logoDash">&Eacute;tico y Sustentable</span>
    </Link>
    <div className="sidebar">
      <Profile />

      <Search />

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <Link to="/" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Tablero
              </p>
            </Link>
          </li>
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