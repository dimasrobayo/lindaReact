import React from 'react'

export default function Asside() {
  return (
    <div className="col-lg-3">
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>Departamentos</span>
            </div>
            <ul>
                <li><a href="/">Moda mujeres</a></li>
                <li><a href="/">Moda hombres</a></li>
                <li><a href="/">Bisutería</a></li>
                <li><a href="/">Maquillaje y cuidado</a></li>
                <li><a href="/">Calzado</a></li>
                <li><a href="/">Limpieza hogar</a></li>
                <li><a href="/">Hogar y decoración</a></li>
                <li><a href="/">Mascotas</a></li>
                <li><a href="/">Electro</a></li>
                <li><a href="/">Deporte y exterior</a></li>
            </ul>
        </div>
    </div>
  )
}
