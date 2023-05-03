import React from "react";

import Topbar from "./Topbar";
import { Link } from "react-router-dom";

import Clock from "react-live-clock";


function DirectSell() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeOfDay;
  if (hours >= 8 && hours < 12) {
    timeOfDay = "Day";
  } else if (hours >= 4 && hours < 6) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "-";
  }
  console.log(timeOfDay);
  return (
    <>
      {/* CONTENT */}
      <section className="dash" id="contentsupervisor">
        <Topbar />
        {/* MAIN */}
        <main style={{ backgroundColor: "#eee" }}>
          <div className="head-title">
            <div className="left">
              <h1>Direct Sell</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Supervisor</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                </li>
                <li>
                  <a className="active" href="#">
                    Direct Sell
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* START FORM TO ADD THE MEMEBER  */}

          <div className="table-data">
            <div className="container-fluid">

              <div className="row mb-3 d-flex justify-content-evenly">
                <div className="col-auto">
                  <div className="mb-3">
                    <h5
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-primary"
                    >
                      Date :{" "}
                      <Clock
                        className="text-dark"
                        format={"dddd, MMMM Mo, YYYY h:mm:s A"}
                        timezone={"Asia/Kolkata"}
                      />
                    </h5>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="">
                    <h5
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-primary"
                    >
                      Time : <span className="text-dark">{timeOfDay}</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-4 d-flex justify-content-around">

                <div style={{ display: "inline-flex" }} className="col-md-6">
                  <label
                    htmlFor="inputPassword2"
                    className="me-3 align-self-center text-primary"
                  >
                    Center Code :
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
                
                <div style={{ display: "inline-flex" }} className="col-md-6">
                  <label
                    htmlFor="inputPassword2"
                    className="me-3 align-self-center text-primary"
                  >
                    Liter
                  </label>
                  <div className="col-sm">
                    <input
                      type="tel"
                      className="form-control"
                      id="liter"
                      placeholder="4"
                    />
                  </div>
                </div>

              </div>

              <div className="row g-3 mb-5 d-flex justify-content-around">

                <div style={{ display: "inline-flex" }} className="col-md-6">
                  <label
                    htmlFor="inputPassword2"
                    className="me-3 align-self-center text-primary"
                  >
                    Rate
                  </label>
                  <div className="col-sm">
                    <input
                      type="tel"
                      className="form-control"
                      id="rate"
                      placeholder="6.7"
                      disabled
                    />
                  </div>
                </div>

                <div style={{ display: "inline-flex" }} className="col-md-6">
                  <label
                    htmlFor="inputPassword2"
                    className="me-3 align-self-center text-primary"
                  >
                    Total
                  </label>
                  <div className="col-sm">
                    <input
                      type="tel"
                      className="form-control"
                      id="total"
                      placeholder="16"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div style={{ display: "inline-flex" }} className="col-auto">
                  <button type="submit " className="btn btn-success">
                    Sell
                  </button>
                </div>

                <div style={{ display: "inline-flex" }} className="col-auto">
                  <button type="submit " className="btn btn-primary">
                    Print
                  </button>
                </div>

                <div style={{ display: "inline-flex" }} className="col-auto">
                  <button type="submit " className="btn btn-warning">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* END FORM TO ADD THE MEMEBER  */}
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default DirectSell;
