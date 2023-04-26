import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
function Sidebar() {

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    
    return (
        <>
            {/* Sidebar */}
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Sidebar - Brand */}
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Member</div>
                </a>
                {/* Divider */}
                {/* <hr class="sidebar-divider my-0"> */}
                {/* Nav Item - Dashboard */}
                <li className={`nav-item ${location.pathname==="/member/overview"? "active": ""}`}>
                    <Link className="nav-link" to="/member/overview"> 
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Nav Item - Message */}
                <li className={`nav-item ${location.pathname==="/member/message"? "active": ""}`}>
                    <Link className="nav-link" to="/member/message">
                        <i className="fas fa-envelope fa-fw" />
                        <span>Message</span>
                    </Link>
                </li>
                {/* Nav Item - Animal Health info */}
                <li className={`nav-item ${location.pathname==="/member/ahi"? "active": ""}`}>
                    <Link className="nav-link" to="/member/ahi">
                        <i className="fas fa-notes-medical" />
                        <span>Animal Health info</span>
                    </Link>
                </li>
                {/* Nav Item - Profile */}
                <li className={`nav-item ${location.pathname==="/member/profile"? "active": ""}`}>
                    <Link className="nav-link" to="/member/profile">
                        <i className="fas fa-fw fa-user-alt" />
                        <span>Profile</span>
                    </Link>
                </li>
                {/* Nav Item - Recipt */}
                <li className={`nav-item ${location.pathname==="/member/recipt"? "active": ""}`}>
                    <Link className="nav-link" to="/member/recipt">
                        <i className="fas fa-receipt" />
                        <span>Recipt</span>
                    </Link>
                </li>
                {/* Nav Item - Logout */}
                <li className="nav-item ">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-sign-out-alt" />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
            {/* End of Sidebar */}



        </>
    )
}

export default Sidebar