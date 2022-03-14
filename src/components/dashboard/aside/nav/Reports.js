import React from 'react';

export default function Reports() {
    return (
        <li className="nav-item">
            <a href="/#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
                <p>
                    Reporte
                    <i className="fas fa-angle-left right" />
                </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Advanced Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Editors</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/validation.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Validation</p>
                </a>
              </li>
            </ul>
        </li>
    );
}
