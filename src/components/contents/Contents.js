import React from 'react';
import Visits from './cards/Visits';
import FeaturedProducts from './cards/Featured Products';
import SalesStatistics from './cards/SalesStatistics';
import GeneralDescriptions from './cards/GeneralDescriptions';

export default function Contents() {
  return (
    <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">TABLERO</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                            <li className="breadcrumb-item active">Tablero v3</li>
                        </ol>
                    </div>
                </div>
            </div>
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
                        {/* CARD SALES */}
                        <div className="card">
                            <SalesStatistics />
                        </div>

                        {/* CARD GENERAL DESCCRIPTIONS STORE ON LINE */}
                        <div className="card">
                            <GeneralDescriptions />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}