import React from "react";
import Layout from "../layout/Layout";

const ApplicationDetail = () => {
    return (
        <Layout>
            <div className="mt-0">
                <div className="row g-4">
                    <div className="col-12 col-xl-12 order-1 order-xl-0">

                        <div className="card shadow-none border border-300 my-4" data-component-card>
                            <div className="card-header p-4 border-bottom border-300 bg-soft">
                                <div className="row g-3 justify-content-between align-items-end">
                                    <div className="col-3 col-md">

                                        <p className="text-900 mb-0" data-anchor>AP-00001</p>
                                    </div>
                                    <div className="col-3 col-md">
                                        <p className="text-900 mb-0" data-anchor>AP-00001</p>
                                    </div>
                                    <div className="col-6 col-md">
                                        <p className="text-900 mb-0" style={{ float: "right" }}> 25-APR-2022</p>

                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <b>Sector:</b> Gambling
                                    </div>
                                    <div className="col-md-4">
                                        <b>Trading License:</b> Yes
                                    </div>
                                    <div className="col-md-4">
                                        <b>Trading / Start Up: :</b> Startup
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <span className="badge bg-success">A</span>&nbsp;&nbsp;<span>Application 1</span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="badge bg-warning">P</span>&nbsp;&nbsp;<span>Application 2</span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="badge bg-danger">X</span>&nbsp;&nbsp;<span>Application 3</span>
                                    </div>
                                    <div className="col-md-3">

                                        <p className="text-center">
                                            <i className="fa-solid fa-file-arrow-down"></i><br />
                                            Download Application</p>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="tableExample2" data-list='{"valueNames":["date","note"],"page":5,"pagination":true}'>
                                            <div className="table-responsive scrollbar">
                                                <table className="table table-bordered table-striped fs--1 mb-0">
                                                    <thead className="bg-200 text-900">
                                                        <tr>
                                                            <th className="sort" data-sort="name">Date</th>
                                                            <th className="sort" data-sort="email">Notes</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="appData">
                                                        <tr> <td className="name">24 May 2022</td>
                                                            <td className="note">test</td>

                                                        </tr>
                                                        <tr> <td className="name">24 May 2022</td>
                                                            <td className="note">test</td>

                                                        </tr>
                                                        <tr> <td className="name">24 May 2022</td>
                                                            <td className="note">test</td>

                                                        </tr>
                                                        <tr> <td className="name">24 May 2022</td>
                                                            <td className="note">test</td>

                                                        </tr>
                                                        <tr> <td className="name">24 May 2022</td>
                                                            <td className="note">test</td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3"><button className="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
                                                <ul className="pagination mb-0"></ul><button className="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
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

export default ApplicationDetail;