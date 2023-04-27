import React from 'react'
import Topbar from './Topbar';

function Message() {
    return (
        <>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {<Topbar title="Message" />}
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
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}

        </>
    )
}

export default Message;