import React, { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

import user1 from "./img/profile.png";
import user2 from "./img/profile2.jpg";
import user3 from "./img/profile3.webp";
import user4 from "./img/profile-4.jpg";
import user5 from "./img/profile5.jpg";

function CustomerForm() {
  return (
    <>
      {/* CONTENT */}
      <section className="dash" id="contentsupervisor">
        <Topbar />
        {/* MAIN */}
        <main style={{ backgroundColor: "#eee" }}>
          <div className="head-title">
            <div className="left">
              <h1>Member</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Supervisor</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                </li>
                <li>
                  <a className="active" href="#">
                    Member
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* START FORM TO ADD THE MEMEBER  */}

          <div className="table-data">
            <div className="container-fluid">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="ABC XYZ"
                  value="ABC XYZ"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-primary"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="abcxyz@gmail.com"
                  value="abcxyz@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-primary"
                >
                  Phone No.
                </label>
                <input
                  type="tel"
                  className="form-control "
                  id="phone"
                  placeholder="+91 01234 56789"
                  value="+91 01234 56789"
                />
              </div>

              <div className="row g-3 mb-3">

                  <div style={{display:"inline-flex"}} className="col-auto">
                    <label htmlFor="inputPassword2" className="me-3 align-self-center text-primary">
                      No. of Buffalo
                    </label>
                    <div className="col-sm">

                    <input
                      type="tel"
                      className="form-control text-primary"
                      id="inputNo2"
                      placeholder="2"
                      />
                      </div>
                  </div>

                  <div style={{display:"inline-flex"}} className="col-auto">
                    <label htmlFor="inputPassword2" className="me-3 align-self-center text-primary">
                      No. of Cow
                    </label>
                    <div className="col-sm">

                    <input
                      type="tel"
                      className="form-control"
                      id="inputNo3"
                      placeholder="4"
                      />
                      </div>
                  </div>

              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label text-primary"
                >
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows={3}
                  defaultValue={"Near Chitranagari,Kangalgav,Kolhapur"}
                  placeholder={"Near Chitranagari,Kangalgav,Kolhapur"}
                />
              </div>

              <button type="submit " className="btn btn-success">
                Add
              </button>
            </div>
          </div>

          {/* END FORM TO ADD THE MEMEBER  */}


          {/* START List of THE MEMEBER  */}
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>List of Member's</h3>
                {/* <i class='bx bx-search' ></i>
                    <i class='bx bx-filter' ></i> */}
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={user1} alt="profile" />
                      <p>Rohit Ardalkar</p>
                    </td>
                    <td>
                      
                            <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user2} />
                      <p>Liladhar Kamble</p>
                    </td>
                    <td>
                      
                            <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user3} />
                      <p>Mayur Redekar</p>
                    </td>
                    <td>
                      
                            <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user4} />
                      <p>Rohit Adam</p>
                    </td>
                    <td>
                      
                            <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={user5} />
                      <p>Prathmesh Sarate</p>
                    </td>
                    <td>
                      
                            <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* END List of THE MEMEBER  */}
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default CustomerForm;
