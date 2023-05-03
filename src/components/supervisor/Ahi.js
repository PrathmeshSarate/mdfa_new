import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";


function Ahi() {
    return (
        <>
        {/* CONTENT */}
        <section className="dash" id="contentsupervisor">
          <Topbar />
          {/* MAIN */}
          <main style={{ backgroundColor: "#eee" }}>
            <div className="head-title">
              <div className="left">
                <h1>Animal's health info</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Supervisor</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                  </li>
                  <li>
                    <a className="active" href="#">
                      Animal's health info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* START FORM TO ADD THE MEMEBER  */}
  
            <div className="table-data">
              <div className="container-fluid">

                <div className="row">

                  <div className="col-md-6 col-sm-12 bg-danger rounded p-3">

                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label text-white"
                      >
                        Disease title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Lumpy Skin Disease in Cattle"
                      />
                    </div>

      
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label text-white"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder={"Lumpy skin disease is a viral infection of cattle. Originally found in Africa, it has also spread to countries in the Middle East, Asia, and eastern Europe.Clinical signs include fever, lacrimation, hypersalivation, and characteristic skin eruptions. Diagnosis is by histopathology, virus isolation, or PCR. Attenuated vaccines may help control outbreaks."}
                      />
                    </div>
      
                  </div>

                  <div className="col-md-6 col-sm-12 bg-success p-3 rounded ">

                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label text-white"
                      >
                        Disease Treatment and Prevention
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Attenuated virus vaccines may help control spread"
                      />
                    </div>

      
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label text-white"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder={"The spread of lumpy skin disease in recent years beyond its ancestral home of Africa is alarming. Quarantine restrictions have proved to be of limited use. Vaccination with attenuated virus offers the most promising method of control and was effective in halting the spread of the disease in the Balkans.Administration of antibiotics to control secondary infection and good nursing care are recommended, but the large number of affected animals within a herd may preclude treatment."}
                      />
                    </div>

                  </div>
                  <div className="pt-3 ">

                  <button type="submit " className="btn btn-dark">
                      Add
                    </button>
                  </div>

                </div>
              </div>
            </div>
  
            {/* END FORM TO ADD THE MEMEBER  */}
  
  
            {/* START List of THE MEMEBER  */}
            <div className="table-data">
              <div className="order">
                <div className="head">
                  <h3>List</h3>
                  {/* <i class='bx bx-search' ></i>
                      <i class='bx bx-filter' ></i> */}
                </div>
                <table className="table table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th>Title</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <p>Lumpy Skin Disease in Cattle</p>
                    </td>
                    <td>
                        <Link className="float-start btn btn-primary text-white" to="/"><i class='bx bx-edit'></i></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Lumpy Skin Disease in Cattle</p>
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

export default Ahi