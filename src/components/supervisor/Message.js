import React from 'react'
import Topbar from './Topbar';

function Message() {
    return (
        <>
        {/* CONTENT */}
        <section className="dash" id="contentsupervisor">
          <Topbar />
          {/* MAIN */}
          <main style={{ backgroundColor: "#eee" }}>
            <div className="head-title">
              <div className="left">
                <h1>Message</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Supervisor</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                  </li>
                  <li>
                    <a className="active" href="#">
                      Message
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* START FORM TO ADD THE MEMEBER  */}
  
            <div className="table-data">
             {/* Begin Page Content */}
             <div className="container-fluid">
                        {/* Content Row Card  */}
                        <div className="row">
                            {/* <div className="container"> */}
                            <br />
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#inbox">
                                        Inbox <span className="badge bg-danger">2</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#sent">
                                        Sent messages
                                    </a>
                                </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                                {/* INBOX DIV */}
                                <div id="inbox" className="container-fluid tab-pane active">
                                    <br />
                                    <ul className="pt-5" style={{ listStyleType: "none" }}>
                                        <div className="py-2">
                                            <li
                                                className="bg-primary text-white ps-4"
                                                style={{ padding: "30px 0px 30px 0px",borderRadius:"20px" }}
                                            >
                                                <h5>From : Admin</h5>
                                                <small>&nbsp;Reguarding your query</small>
                                                <a href="">
                                                    <span className="float-end me-5 text-black btn btn-light">Open</span>
                                                </a>
                                            </li>
                                        </div>
                                        <div className="py-2">
                                            <li
                                                className="bg-success text-white ps-4 "
                                                style={{ padding: "30px 0px 30px 0px",borderRadius:"20px" }}
                                            >
                                                <h5>From : Supervisor</h5>
                                                <small>&nbsp;Reguarding milk query</small>
                                                <a href="">
                                                    <span className="float-end me-5 text-black btn btn-light">Open</span>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                {/* SENT MSG DIV */}
                                <div id="sent" className="container-fluid tab-pane fade">
                                    <br />
                                    <ul className="pt-5" style={{ listStyleType: "none" }}>                                    
                                    <div className="py-2">
                                        <li
                                            className="bg-primary text-white ps-4"
                                            style={{ padding: "30px 0px 30px 0px",borderRadius:"20px" }}
                                        >
                                            <h5>Me</h5>
                                            <span>&nbsp;Query about milk collection</span>
                                            <a href="">
                                                <span className="float-end me-5 text-black btn btn-light">
                                                    Open
                                                </span>
                                            </a>
                                        </li>
                                        </div>
                                        
                                        <div className="py-2">
                                        <li
                                            className="bg-success text-white ps-4"
                                            style={{ padding: "30px 0px 30px 0px",borderRadius:"20px" }}
                                        >
                                            <h5>Me</h5>
                                            <span>&nbsp;Query about fat</span>
                                            <a href="">
                                                <span className="float-end me-5 text-black btn btn-light">
                                                    Open
                                                </span>
                                            </a>
                                        </li>
                                        </div>
                                        
                                        <div className="py-2">
                                        <li
                                            className="bg-primary text-white ps-4"
                                            style={{ padding: "30px 0px 30px 0px",borderRadius:"20px" }}
                                        >
                                            <h5>Me</h5>
                                            <span>&nbsp;Query about milk animal health</span>
                                            <a href="">
                                                <span className="float-end me-5 text-black btn btn-light">
                                                    Open
                                                </span>
                                            </a>
                                        </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* /.container-fluid */}
            </div>
  
            {/* END FORM TO ADD THE MEMEBER  */}
          </main>
          {/* MAIN */}
        </section>
        {/* CONTENT */}
      </>
    )
}

export default Message;