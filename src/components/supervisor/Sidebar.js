import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";


function Sidebar() {
  // The empty array as the second argument ensures that this effect runs only once on mount
  let location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);


  return (
    <>
      {/* Sidebar */}
      {/* SIDEBAR */}
      <section id="sidebar">
        <Link to="#" className="brand">
          {/* <i className="bx bxs-business" /> */}
          <i class='bx bxs-check-shield'></i>
          <span className="text">Supervisor</span>
        </Link>
        <ul className="side-menu top" style={{ paddingLeft: "0px" }}>
          <li className={`${location.pathname === "/supervisor/overview" ? "active" : ""}`}>
            <Link to="/supervisor/overview">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={`${location.pathname === "/supervisor/CustomerFormSupervisor" ? "active" : ""}`}>
            <Link to="/supervisor/CustomerFormSupervisor">
              <i className="bx bxs-group" />
              <span className="text">Member</span>
            </Link>
          </li>
          <li className={`${location.pathname === "/supervisor/MilkCollectionSupervisor" ? "active" : ""}`}>
            <Link to="/supervisor/MilkCollectionSupervisor">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Milk Collection</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-message-dots" />
              <span className="text">Message</span>
            </Link>
          </li>
          <li className={`${location.pathname === "/supervisor/DirectSellSupervisor" ? "active" : ""}`}>
            <Link to="/supervisor/DirectSellSupervisor">
              <i className="bx bxl-paypal" />
              <span className="text">Direct Sell</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bx-health" />
              <span className="text">Animal's health info</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu" style={{ paddingLeft: "0px" }}>
          <li>
            <Link to="#">
              <i className="bx bxs-cog" />
              <span className="text">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="logout">
              <i className="bx bx-log-out" />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* End of Sidebar */}



    </>
  )
}

export default Sidebar