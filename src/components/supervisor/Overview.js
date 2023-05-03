import React, { useState } from "react";
import Topbar from "./Topbar";
import ApexCharts from "react-apexcharts";
import "./css/style.css";
import { Link } from "react-router-dom";

import user1 from "./img/profile.png";
import user2 from "./img/profile2.jpg";
import user3 from "./img/profile3.webp";
import user4 from "./img/profile-4.jpg";
import user5 from "./img/profile5.jpg";

function Overview() {
  const [options] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });

  const [series] = useState([
    {
      name: "Liter's",
      data: [30 + "d", 40, 35, 50, 49, 60, 70, 91, 125, 100, 130, 135],
    },
  ]);

  return (
    <>
      {/* Content Wrapper */}
      <>
        {/* CONTENT */}
        <section className="dash" id="contentsupervisor">
         <Topbar/>
          {/* MAIN */}
          <main style={{ backgroundColor: "#eee" }}>
            <div className="head-title">
              <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Supervisor</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                  </li>
                  <li>
                    <a className="active" href="#">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn-download">
                <i className="bx bxs-cloud-download" />
                <span className="text">Download REPORT</span>
              </a>
            </div>
            <ul className="box-info" style={{ paddingLeft: "0px" }}>
              <li>
                <i className="bx bxs-group" />
                <span className="text">
                  <h3>100</h3>
                  <p>Customer</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-collection" />
                <span className="text">
                  <h3>₹10000</h3>
                  <p>Total Buy</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-dollar-circle" />
                <span className="text">
                  <h3>₹8000</h3>
                  <p>Profit</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-dollar-circle" />
                <span className="text">
                  <h3>₹2000</h3>
                  <p>Direct Sale</p>
                </span>
              </li>
            </ul>
            <div className="table-data">
              <div className="order">
                <div className="head">
                  <h3>Today Collection</h3>
                  {/* <i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i> */}
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Count</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={user1} alt="profile" />
                        <p>Rohit Ardalkar</p>
                      </td>
                      <td>5ltr</td>
                      <td>
                        <span className="status completed">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={user2} />
                        <p>Liladhar Kamble</p>
                      </td>
                      <td>10ltr</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={user3} />
                        <p>Mayur Redekar</p>
                      </td>
                      <td>2ltr</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={user4} />
                        <p>Rohit Adam</p>
                      </td>
                      <td>4ltr</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={user5} />
                        <p>Prathmesh Sarate</p>
                      </td>
                      <td>2ltr</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* CHARTS STARTS HERE */}
              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>Daily Reports</h1>
                      <p>Dairy Name</p>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true" />
                  </div>
                  <div id="apex1" />
                </div>
                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>Stats Reports</h1>
                      <p>Kolhapur</p>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true" />
                  </div>
                  <div className="charts__right__cards">
                    <div className="card1">
                      <h1>Income</h1>
                      <p>$75,300</p>
                    </div>
                    <div className="card2">
                      <h1>Sales</h1>
                      <p>$124,200</p>
                    </div>
                    <div className="card3">
                      <h1>Users</h1>
                      <p>3900</p>
                    </div>
                    <div className="card4">
                      <h1>Orders</h1>
                      <p>1881</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CHARTS ENDS HERE */}
            </div>
          </main>
          {/* MAIN */}
        </section>
        {/* CONTENT */}
      </>

      {/* End of Content Wrapper */}
    </>
  );
}

export default Overview;
