import React from "react";
import Header from "./Sidebar";
import Sidebar from "./Header";

const Layout = ({children}) => {
    return (
        <main className="main" id="top">
            <div className="container-fluid px-0">
                <Header />
                <Sidebar />
                <div className="content pt-5">
                   
                        {children}
                   

                    <footer className="footer">
                        <div className="row g-0 justify-content-between align-items-center h-100 mb-3">
                            <div className="col-12 col-sm-auto text-center">
                                <p className="mb-0 text-900"><br className="d-sm-none" />2022 &copy;</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    )
}

export default Layout;