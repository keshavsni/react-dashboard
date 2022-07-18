import axios from "axios";
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";


const Application = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        console.log('useeffect called')
        axios.get("https://62d4faa8cd960e45d45e81a5.mockapi.io/api/v1/users_table")
            .then(response =>{
                console.log(response);
                setUsers(response.data);
            })
    },["users"])
    return (
        <Layout>
            <div className="mt-4">
                <div className="row g-4">
                    <div className="col-12 col-xl-12 order-1 order-xl-0">

                        <div className="card shadow-none border border-300 my-4" data-component-card>
                            <div className="card-header p-4 border-bottom border-300 bg-soft">
                                <div className="row g-3 justify-content-between align-items-end">
                                    <div className="col-12 col-md">
                                        <h3 className="text-900 mb-0" data-anchor>Applications</h3>

                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="collapse code-collapse" id="pagination-with-numbering-code"><pre className="scrollbar" style={{ "max-height": "420px" }} />
                                </div>
                                <div className="p-4 code-to-copy">
                                    <div id="tableExample2" data-list='{"valueNames":["name","date","bussiness","action"],"page":5,"pagination":true}'>
                                        <div className="table-responsive scrollbar">
                                            <table className="table table-bordered table-striped fs--1 mb-0">
                                                <thead className="bg-200 text-900">
                                                    <tr>
                                                        <th className="sort" data-sort="name">Company Name</th>
                                                        <th className="sort" data-sort="date">Website</th>
                                                        <th className="sort" data-sort="bussiness">Email Id</th>
                                                        <th className="" data-sort="">Contact Number</th>
                                                        <th className="" data-sort="">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list" id="appData">
                                                    {users && users.map(user => {
                                                        return (
                                                            <tr> <td className="name">{user.company_name}</td>
                                                        <td className="date">{user.website}</td>
                                                        <td className="bussiness">{user.email}</td>
                                                        <td className="bussiness">{user.phone}</td>
                                                        <td><Link title="Detail" to="/application-detail"><i className="fa fa-eye"></i></Link></td>
                                                    </tr>
                                                        )
                                                        
                                                    })}
                                                    
                                                  

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
        </Layout>
    )
}

export default Application;