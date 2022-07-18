import React from "react";
import Layout from "./layout/Layout";
import { Link } from "react-router-dom";

const Dashbboard = () => {
    return (
        <Layout>
            <div className="pb-5">
                <div className="row g-5">

                    <div className="col-12 col-xxl-6">
                        <div className="row g-3">
                            <div className="col-12 col-md-4">
                                <div className="card border border-200 shadow-none h-100 bg-gradient bg-success">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="mb-1" style={{ color: "#fff" }}>Active Applications<span className="badge badge-light-warning rounded-pill fs--1 ms-2">12</span></h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card border border-200 shadow-none h-100 bg-gradient bg-warning">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="mb-1" style={{ color: "#fff" }}>Declined Applications
                                                    <span className="badge badge-light-warning rounded-pill fs--1 ms-2">4</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card border border-200 shadow-none h-100 bg-gradient bg-primary ">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="mb-2" style={{ color: "#fff" }}>Approved  Applicaitons
                                                    <span className="badge badge-light-warning rounded-pill fs--1 ms-2">5</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashbboard;