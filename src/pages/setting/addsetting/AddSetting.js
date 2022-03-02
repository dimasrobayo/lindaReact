import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../components/title/Title';
import './addsetting.css';

export default function AddSetting() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <Title
          title='CONFIGURACIONES DEL SISTEMA'
          component='Home / Configuraciones del sistema '
          position='/ Nueva Empresa'
          path='/setting'
        />
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Empresas Registradas</h3>
                  <div className="btn-group option-general">
                    <Link type="button" className="btn btn-success" to="/setting">
                      <i className="fas fa-window-close"></i>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <h1>nuevo formulario</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
