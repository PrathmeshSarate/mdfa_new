import React from "react";
import Topbar from "./Topbar";

function Recipt() {
  return (
    <>
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {<Topbar title="Recipt" />}
          {/* Begin Page Content */}
          <div className="container-fluid">
            <div className="container-fluid pb-5">
              <div className="d-flex justify-content-center">
                <div className="col-md-4">
                  <h4 className="py-4 text-center">
                    Selcet date for Recipt{" "}
                    <span className="badge bg-dark ms-2">DAY</span>{" "}
                  </h4>
                  <input id="startDate" className="form-control" type="date" />
                </div>
              </div>
            </div>

            <hr className="border-2 border-dark" />

            <div className="container-fluid">
              <div className="d-flex justify-content-center">
                <form className="row g-3 text-center justify-content-center ">
                {/* <div className="col-md-12"> */}
                  <h4 className="py-4 ">
                    Selcet date for Recipt{" "}
                    <span className="badge bg-primary ms-2">Month</span>
                  </h4>
                  <div className="col-auto " style={{display: "inherit"}}>
                    <label htmlFor="staticEmail2" className="d-inline px-4 align-self-center">
                      From :
                    </label>
                    <input id="startDate" className="form-control" type="date" />
                  </div>
                  <div className="col-auto " style={{display: "inherit"}}>
                    <label htmlFor="staticEmail2" className="d-inline px-4 align-self-center">
                      To :
                    </label>
                    <input id="startDate" className="form-control" type="date" />
                  </div>
                  
                  {/* </div> */}
                </form>

                
                  {/* 
                  <input id="startDate" className="form-control" type="date" /> */}
                
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

export default Recipt;
