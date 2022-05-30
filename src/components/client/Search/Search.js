import React from 'react'

export default function Search() {
  return (
    <div className="hero__search">
        <div className="hero__search__form">
            <form action="#">
                <div className="hero__search__categories">
                    Todos
                    <span className="arrow_carrot-down"></span>
                </div>
                <input type="text" placeholder="Que necesitas?" />
                <button type="submit" className="site-btn">BUSCAR</button>
            </form>
        </div>
        <div className="hero__search__phone">
            <div className="hero__search__phone__icon">
                <i className="fa fa-phone"></i>
            </div>
            <div className="hero__search__phone__text">
                <h5>+56-9 56-594791</h5>
                <span>suporte 24/7</span>
            </div>
        </div>
    </div>
  )
}
