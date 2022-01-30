import React from 'react';
import { Link } from 'react-router-dom';
import './setting.css';

export default function Setting() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
          <div className="container-fluid">
              <div className="row mb-2">
                  <div className="col-sm-6">
                      <h1 className="m-0">CONFIGURACIONES DEL SISTEMA</h1>
                  </div>
                  <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item">
                            <Link to="/">Home </Link>
                            / Configuraciones del sistema
                          </li>
                          <li className="breadcrumb-item active">Tablero v3</li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Empresas Registradas</h3>
                  <div className="btn-group option-general">
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <table id="tableInfo" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>NOMBRE DE LA EMPRESA</th>
                        <th>ADMINISTRADOR</th>
                        <th>TEL&Eacute;FONO</th>
                        <th>EMAIL</th>
                        <th>ACCIONES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hannah Enterprise</td>
                        <td>Dimas Robayo</td>
                        <td>+56-9-56594791</td>
                        <td>dimasrobayo@gmail.com</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-info">
                              <i className="fas fa-ellipsis-h"></i>
                            </button>
                            <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="/">
                              <i className="fas fa-eye"> Ver</i>
                              </Link>
                              <Link className="dropdown-item" to="/">
                                <i className="fas fa-pencil-alt"> Editar</i>
                              </Link>
                              <Link className="dropdown-item" to="/">
                                <i className="fas fa-trash"> Eliminar</i>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>KDOCE SPA</td>
                        <td>Rodrigo Villaroel</td>
                        <td>+56-9-56594792</td>
                        <td>rvillaroel@kdoce.cl</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-info">
                              <i className="fas fa-ellipsis-h"></i>
                            </button>
                            <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="/">
                              <i className="fas fa-eye"> Ver</i>
                              </Link>
                              <Link className="dropdown-item" to="/">
                                <i className="fas fa-pencil-alt"> Editar</i>
                              </Link>
                              <Link className="dropdown-item" to="/">
                                <i className="fas fa-trash"> Eliminar</i>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>NOMBRE DE LA EMPRESA</th>
                        <th>ADMINISTRADOR</th>
                        <th>TEL&Eacute;FONO</th>
                        <th>EMAIL</th>
                        <th>ACCIONES</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
