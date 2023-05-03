import React from "react";
import Topbar from "./Topbar";
import { Link } from 'react-router-dom'

function OwnerAddSupervisor() {
  return (
    <>
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {<Topbar/>}
          {/* Begin Page Content */}
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-5">
                <h4 className="mb-4 text-black">Add new Supervisor</h4>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="ABC XYZ"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="abcxyz@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+91 01234 56789"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows={3}
                    placeholder={"Near Chitranagari,Kangalgav,Kolhapur"}
                  />
                </div>

                <button type="submit " className="btn btn-success">
                  Add
                </button>
              </div>

              <div className="col-md-7">
                <div className="card">
                  <div className="card-header text-black"><h4>List of Supervisor</h4></div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr className="text-center">
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ABC</td>
                          <td>+91 01234 56789</td>
                          <td>
                            <Link className="float-start btn btn-info " to="/">Edit</Link>
                            <Link className="float-end btn btn-danger" to="/">Delete</Link>
                          </td>
                        </tr>
                        <tr>
                          <td>PQR</td>
                          <td>+91 01234 56789</td>
                          <td>
                            <Link className="float-start btn btn-info " to="/">Edit</Link>
                            <Link className="float-end btn btn-danger" to="/">Delete</Link>
                          </td>
                        </tr>
                        <tr>
                          <td>XYZ</td>
                          <td>+91 01234 56789</td>
                          <td>
                            <Link className="float-start btn btn-info " to="/">Edit</Link>
                            <Link className="float-end btn btn-danger" to="/">Delete</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <ul style={{listStyleType:"decimal;"}}>
                        <li className="my-3">ABC <Link className="float-end btn btn-info" to="/">Edit</Link></li>
                        <li className="my-3"> <Link className="float-end btn btn-info" to="/">Edit</Link></li>
                        <li className="my-3"> <Link className="float-end btn btn-info" to="/">Edit</Link></li>
                    </ul> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
      </div>
      {/* End of Content Wrapper */}
    </>
  );
}

export default OwnerAddSupervisor;
