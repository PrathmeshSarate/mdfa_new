import HomeApp from "./HomeApp";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// CUSTOMER IMPORTS
import Message from "./components/customer/Message";
import Overview from "./components/customer/Overview";
import Sidebar from "./components/customer/Sidebar";
import Ahi from "./components/customer/Ahi";
import Profile from "./components/customer/Profile";
import Recipt from "./components/customer/Recipt";


// OWENER IMPORTS 
import OverviewSupervisor from "./components/owner/Overview";
import SidebarSupervisor from "./components/owner/Sidebar";
import Supervisor from "./components/owner/Supervisor";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeApp />} />

          <Route path="/login" element={<Login />} />

          {/* OWNER ROUTES START */}

          <Route
            exact
            path="/owner/overview"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <OverviewSupervisor />
                </div>
              </React.Fragment>
            }
            />
          <Route
            path="/owner/profile"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <Supervisor />
                </div>
              </React.Fragment>
            }
          />


            {/* OWNER ROUTES END */}



          <Route
            exact
            path="/member/overview"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <Sidebar />
                  <Overview />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/member/message"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <Sidebar />
                  <Message />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/member/profile"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <Sidebar />
                  <Profile />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/member/recipt"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <Sidebar />
                  <Recipt />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/member/ahi"
            element={
              <React.Fragment>
                <div id="wrapper">
                  <Sidebar />
                  <Ahi />
                </div>
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
