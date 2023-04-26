import React from 'react'
import Topbar from './Topbar';

function Overview() {
    return (
        <>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {<Topbar title="Dashboard"/>}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        {/* Content Row Card  */}
                        <div className="row">
                            {/* Cow Milk supplying (Monthly) Card Example */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Cow Milk supplying{" "}
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                    180 Liter's
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge text-white bg-primary p-2">
                                                    Month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Buffelo Milk supplying (Monthly) Card Example */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Buffelo Milk supplying
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                    120 Liter's
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge text-white bg-primary p-2">
                                                    Month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cow Milk supplying (Day) Card Example */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Cow Milk supplying{" "}
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            8 Liter's
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge text-white bg-dark p-2">Day</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Buffelo Milk supplying (Day) Card Example */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Buffelo Milk supplying
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                    9 Liter's
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge text-white bg-dark p-2">Day</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Row Overview Chart*/}
                        <div className="row">
                            {/* Area Chart */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="card shadow mb-4">
                                    {/* Card Header - Dropdown */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">
                                            Overview
                                        </h6>
                                    </div>
                                    {/* Card Body */}
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="myAreaChart" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
            
        </>
    )
}

export default Overview