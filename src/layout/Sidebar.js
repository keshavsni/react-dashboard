import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="navbar navbar-light navbar-vertical navbar-vibrant navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div className="navbar-vertical-content scrollbar">
              <ul className="navbar-nav flex-column" id="navbarVerticalNav">
                <li className="nav-item"><Link className="nav-link active" to="/">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="cast"></span></span><span className="nav-link-text">Dashbboard</span></div>
                  </Link></li>
                <li className="nav-item">
                  <p className="navbar-vertical-label">Pages</p>
                  <Link className="nav-link" to="/add-application" role="button" data-bs-toggle="" aria-expanded="false">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="flag"></span></span><span className="nav-link-text">Add Application</span></div>
                  </Link>
                  <Link className="nav-link" to="/application-list" role="button" data-bs-toggle="" aria-expanded="false">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="flag"></span></span><span className="nav-link-text">My Application</span></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Sidebar;