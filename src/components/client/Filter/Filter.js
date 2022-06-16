import React from 'react'

export default function Filter() {
    return (
        <>
            <div className="col-lg-4 col-md-5">
                <div className="filter__sort">
                    <span>Ordenar por: </span>
                    <select>
                        <option value="0">Nombre</option>
                        <option value="0">Precio</option>
                    </select>
                </div>
            </div>

            <div className="col-lg-4 col-md-4">
                <div className="filter__found">
                    <h6><span>16</span> Productos encontrados</h6>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-3">
                <div className="filter__option">
                    <span className="icon_grid-2x2"></span>
                    <span className="icon_ul"></span>
                </div>
            </div>
        </>
    )
}
