import React from 'react';

export default function Visits() {
    return( 
    <div>
        <div className="card-header border-0">
            <div className="d-flex justify-content-between">
                <h3 className="card-title">Visitantes en línea</h3>
                <a href="/#">Ver Reporte</a>
            </div>
        </div>

        <div className="card-body">
            <div className="d-flex">
                <p className="d-flex flex-column">
                    <span className="text-bold text-lg">820</span>
                    <span>Total de Visitas</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                        <i className="fas fa-arrow-up" /> 12.5%
                    </span>
                    <span className="text-muted">Desde la semana pasada</span>
                </p>
            </div>

            {/* /.d-flex */}
            <div className="position-relative mb-4">
                <canvas id="visitors-chart" height={200} />
            </div>
            <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                    <i className="fas fa-square text-primary" /> Esta Semana
                </span>
                <span>
                    <i className="fas fa-square text-gray" /> Semana Pasada
                </span>
            </div>
        </div>
    </div>);
}
