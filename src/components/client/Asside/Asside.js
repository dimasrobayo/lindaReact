import React from 'react';
import './Asside.css';
import { Link } from 'react-router-dom';

export default function Asside() {
  return (
    <div className="hero__categories">
        <div className="hero__categories__all">
            <i className="fa fa-bars"></i>
            <span>Departamentos</span>
        </div>
        <ul>
            <li><Link to="/store">Moda mujeres</Link></li>
            <li><Link to="/store">Moda hombres</Link></li>
            <li><Link to="/store">Bisutería</Link></li>
            <li><Link to="/store">Maquillaje y cuidado</Link></li>
            <li><Link to="/store">Calzado</Link></li>
            <li><Link to="/store">Limpieza hogar</Link></li>
            <li><Link to="/store">Hogar y decoración</Link></li>
            <li><Link to="/store">Mascotas</Link></li>
            <li><Link to="/store">Electro</Link></li>
            <li><Link to="/store">Deporte y exterior</Link></li>
        </ul>
    </div>
  )
}
