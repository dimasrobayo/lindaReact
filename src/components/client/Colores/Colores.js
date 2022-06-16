import React from 'react'

export default function Colores() {
  return (
    <div>
        <h4>Colores</h4>
        <div className="sidebar__item__color sidebar__item__color--white">
            <label htmlFor="white">
                Blanco
                <input type="radio" id="white" />
            </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--gray">
            <label htmlFor="gray">
                Gris
                <input type="radio" id="gray" />
            </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--red">
            <label htmlFor="red">
                Rojo
                <input type="radio" id="red" />
            </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--black">
            <label htmlFor="black">
                Negro
                <input type="radio" id="black" />
            </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--blue">
            <label htmlFor="blue">
                Azul
                <input type="radio" id="blue" />
            </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--green">
            <label htmlFor="green">
                Verde
                <input type="radio" id="green" />
            </label>
        </div>
    </div>
  )
}
