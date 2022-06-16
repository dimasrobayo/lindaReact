import React from 'react'

export default function Size() {
    return (
        <div>
            <h4>Tamaños</h4>
            <div className="sidebar__item__size">
                <label htmlFor="large">
                    Large
                    <input type="radio" id="large" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label htmlFor="medium">
                    Medium
                    <input type="radio" id="medium" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label htmlFor="small">
                    Small
                    <input type="radio" id="small" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label htmlFor="tiny">
                    Tiny
                    <input type="radio" id="tiny" />
                </label>
            </div>
        </div>
    )
}
