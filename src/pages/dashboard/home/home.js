import React from 'react';
import Visits from './contents/Visits';
import FeaturedProducts from './contents/FeaturedProducts';
import SalesStatistics from './contents/SalesStatistics';
import GeneralDescriptions from './contents/GeneralDescriptions';
import Title from '../../../components/dashboard/title/Title';

export default function home() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <Title
            title='TABLERO'
            component='Home '
            position=''
            path='/'
        />
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* COLUMS THE VISITS ON LINE AND PRODUCT WITH MORE SALES */}
            <div className="col-lg-6">
              <div className="card">
                {/* VISITS ON LINE */}
                <Visits />
              </div>

              <div className="card">
                {/* PRODUCT WITH MORE SALES */}
                <FeaturedProducts />
              </div>
            </div>

            {/* COLUM THE SALES AND GENERAL DESCRIPTIONS */}
            <div className="col-lg-6">
              <div className="card">
                {/* CARD SALES */}
                <SalesStatistics />
              </div>

              <div className="card">
                {/* CARD GENERAL DESCCRIPTIONS STORE ON LINE */}
                <GeneralDescriptions />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
