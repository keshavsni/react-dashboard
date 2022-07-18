import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <nav className="navbar navbar-light navbar-top navbar-expand">
      <div className="navbar-logo"><button className="btn navbar-toggler navbar-toggler-humburger-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button> <a className="navbar-brand me-1 me-sm-3" href="index.html">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <p className="logo-text ms-2 d-none d-sm-block">Partner Panel</p>
            </div>
          </div>
        </a></div>
      <div className="collapse navbar-collapse">
        <div className="search-box d-none d-lg-block">
          <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control form-control-sm search-input search min-h-auto" type="search" placeholder="Search..." aria-label="Search" /> <span className="fas fa-search search-box-icon"></span></form>
        </div>
        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row">
          <li className="nav-item dropdown"><a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="text-700" data-feather="bell" style={{height:"20p",width:"20px"}}></span></a></li>
          <li className="nav-item dropdown"><a className="nav-link notification-indicator notification-indicator-primary" id="navbarDropdownSettings" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="text-700" data-feather="settings" style={{height:'20px',width:'20px'}}></span></a></li>
          <li className="nav-item dropdown"><a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
              </svg></a>
            <div className="dropdown-menu dropdown-menu-end py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-white position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/behance.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/google-cloud.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/slack.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/github.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Github</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/bitbucket.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/google-drive.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/trello.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="assets/img/nav-icons/figma.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/twitter.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="assets/img/nav-icons/pinterest.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/linkedin.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="assets/img/nav-icons/google-maps.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/google-photos.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!" target="_blank"><img src="../assets/img/nav-icons/spotify.png" alt="" width="30"/>
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link lh-1 px-0 ms-5" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-l"><img className="rounded-circle" src={require('../assets/img/team/57.png')} alt="" /></div>
            </a>
            <div className="dropdown-menu dropdown-menu-end py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
              <div className="card bg-white position-relative border-0">
                <div className="card-body p-0 overflow-auto scrollbar" style={{height: "18rem"}}>
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl"><img className="rounded-circle" src={require('../assets/img/team/57.png')} alt="" /></div>
                    <h6 className="mt-2">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Update your status" /></div>
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="user"></span>Profile</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                  </ul>
                  <hr/>
                  <div className="px-3"><Link className="btn btn-phoenix-secondary d-flex flex-center w-100" to="/login"><span className="me-2" data-feather="log-out"></span>Sign out</Link></div>
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Header;