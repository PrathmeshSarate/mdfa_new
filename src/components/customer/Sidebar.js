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
                    <div className="sidebar-brand-text mx-3">Member</div>
                </Link>
                {/* Divider */}
                {/* <hr className="sidebar-divider my-0"> */}
                {/* Nav Item - Dashboard */}
                <li className={`nav-item ${location.pathname==="/member/overview"? "active": ""}`}>
                    <Link className="nav-link" to="/member/overview"> 
                        <i className="pe-2 fas fa-lg fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Nav Item - Message */}
                <li className={`nav-item ${location.pathname==="/member/message"? "active": ""}`}>
                    <Link className="nav-link" to="/member/message">
                        <i className="pe-2 fas fa-lg fa-envelope fa-fw" />
                        <span>Message</span>
                    </Link>
                </li>
                {/* Nav Item - Animal Health info */}
                <li className={`nav-item ${location.pathname==="/member/ahi"? "active": ""}`}>
                    <Link className="nav-link" to="/member/ahi">
                        <i className="pe-2 fas fa-lg fa-notes-medical" />
                        <span>Animal Health info</span>
                    </Link>
                </li>
                {/* Nav Item - Profile */}
                <li className={`nav-item ${location.pathname==="/member/profile"? "active": ""}`}>
                    <Link className="nav-link" to="/member/profile">
                        <i className="pe-2 fas fa-lg fa-fw fa-user-alt" />
                        <span>Profile</span>
                    </Link>
                </li>
                {/* Nav Item - Recipt */}
                <li className={`nav-item ${location.pathname==="/member/recipt"? "active": ""}`}>
                    <Link className="nav-link" to="/member/recipt">
                        <i className="pe-2 fas fa-lg fa-receipt" />
                        <span>Recipt</span>
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