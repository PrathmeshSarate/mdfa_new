import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
function Sidebar() {

    let location = useLocation();

    useEffect(() => {
        // console.log(location.pathname);
    }, [location]);

    
    return (
        <>
            {/* Sidebar */}
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Sidebar - Brand */}
                <Link
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    to="/"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="pe-2 fas fa-lg fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Owner</div>
                </Link>
                {/* Divider */}
                {/* <hr className="sidebar-divider my-0"> */}
                {/* Nav Item - Dashboard */}
                <li className={`nav-item ${location.pathname==="/owner/overview"? "active": ""}`}>
                    <Link className="nav-link" to="/owner/overview"> 
                        <i className="pe-2 fas fa-lg fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Nav Item - Profile */}
                <li className={`nav-item ${location.pathname==="/owner/profile"? "active": ""}`}>
                    <Link className="nav-link" to="/owner/profile">
                        <i className="pe-2 fas fa-lg fa-fw fa-user-alt" />
                        <span>Supervisor</span>
                    </Link>
                </li>
                {/* Nav Item - Logout */}
                <li className="nav-item ">
                    <Link className="nav-link" to="/">
                        <i className="pe-2 fas fa-lg fa-sign-out-alt" />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
            {/* End of Sidebar */}



        </>
    )
}

export default Sidebar