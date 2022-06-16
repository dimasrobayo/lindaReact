import React from 'react';
import Asside from '../Asside';
import Search from '../Search';
import Presentation from '../Presentation';

export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Asside />
          </div>

          <div className="col-lg-9">
              <Search />
              <Presentation />
          </div>
        </div>
      </div>
    </section>
  )
}
