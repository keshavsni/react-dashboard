import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";


const Login = (props) => {
    const [bgImg, setbgImg] = React.useState('');
   

   useEffect(()=>{
       fetch('https://picsum.photos/1420/768').then((res)=>{
        let r = Math.random();
           setbgImg(r)
           
       })
   },[])

    return (
      
        <main className="main" style={{
            background:'url(https://picsum.photos/1420/768) no-repeat fixed center',
            "background-size": "cover",
             opacity: "0px"
        }}  id="top">

            <div className="container-fluid px-0">
                <div className="container">
                    <div className="col-sm-12">

                        <div className="row flex-center min-vh-100 py-5">

                            <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3" style={{background: "#d3d2d2de",padding:"15px"}}><Link className="d-flex flex-center text-decoration-none mb-4" to="/">
                                <div className="d-flex align-items-center"><p className="logo-text ms-2 d-none d-sm-block" style={{color: "#fff"}}>Partner Panel</p></div>
                            </Link>

                                <div className="mb-3 text-start"><label className="form-label" for="email">Partner Email address</label>
                                    <div className="form-icon-container"><input className="form-control form-icon-input" id="email" type="email" placeholder="name@example.com" /><span className="fas fa-user text-900 fs--1 form-icon"></span></div>
                                </div>
                                <div className="mb-3 text-start"><label className="form-label" for="password">Password</label>
                                    <div className="form-icon-container"><input className="form-control form-icon-input" type="password" placeholder="Password" /><span className="fas fa-user text-900 fs--1 form-icon"></span></div>
                                </div>
                                <div className="row flex-between-center mb-7">
                                    <div className="col-auto">
                                        <div className="form-check mb-0"><input className="form-check-input" id="basic-checkbox" type="checkbox" checked="checked" /><label className="form-check-label mb-0" for="basic-checkbox">Remember me</label></div>
                                    </div>
                                    <div className="col-auto"><a className="fs--1 fw-semi-bold" href="#!">Forgot Password?</a></div>
                                </div><button className="btn btn-primary w-100 mb-3">Sign In</button>
                                <div className="text-center"><a className="fs--1 fw-bold" href="#!">Create an account</a></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>

    )
}

export default Login;