import React from 'react'
import profilePic from './img/undraw_profile.svg'

function Topbar(props) {
    return (
        <>
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                >
                    <i className="fa fa-bars" />
                </button>
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between">
                    <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
                </div>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item ">
                        <a className="nav-link" href="#" role="button">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                Mr. ABC XYZ
                            </span>
                            <img
                                className="img-profile rounded-circle"
                                src={profilePic}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* End of Topbar */}
        </>
    )
}

export default Topbar