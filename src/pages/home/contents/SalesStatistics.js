import React from 'react';

export default function SalesStatistics() {
  return (
  <div>
      <div className="card-header border-0">
            <div className="d-flex justify-content-between">
                <h3 className="card-title">Ventas</h3>
                <a href="/#">Ver Reporte</a>
            </div>

        </div>

        <div className="card-body">
            <div className="d-flex">
                <p className="d-flex flex-column">
                    <span className="text-bold text-lg">$18,230.00</span>
                    <span>Total de Ventas</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                        <i className="fas fa-arrow-up" /> 33.1%
                    </span>
                    <span className="text-muted">Desde el mes pasado</span>
                </p>
            </div>
            
            <div className="position-relative mb-4">
                <canvas id="sales-chart" height={200} />
            </div>
            <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                    <i className="fas fa-square text-primary" /> This year
                </span>
                <span>
                    <i className="fas fa-square text-gray" /> Last year
                </span>
            </div>
        </div>
  </div>);
}