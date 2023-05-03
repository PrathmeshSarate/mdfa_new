import HomeApp from "./HomeApp";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// SUPERVISOR IMPORTS
import MessageSupervisor from "./components/supervisor/Message";
import OverviewSupervisor from "./components/supervisor/Overview";
import SidebarSupervisor from "./components/supervisor/Sidebar";
import AhiSupervisor from "./components/supervisor/Ahi";
import ProfileSupervisor from "./components/supervisor/Profile";
import CustomerFormSupervisor from "./components/supervisor/CustomerForm";
import MilkCollectionSupervisor from "./components/supervisor/MilkCollection";
import DirectSellSupervisor from "./components/supervisor/DirectSell";


// CUSTOMER IMPORTS
import Message from "./components/customer/Message";
import Overview from "./components/customer/Overview";
import Sidebar from "./components/customer/Sidebar";
import Ahi from "./components/customer/Ahi";
import Profile from "./components/customer/Profile";
import Recipt from "./components/customer/Recipt";

// OWENER IMPORTS
import OverviewOwner from "./components/owner/Overview";
import SidebarOwner from "./components/owner/Sidebar";
import OwnerAddSupervisor from "./components/owner/OwnerAddSupervisor";


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
                  <SidebarOwner />
                  <OverviewOwner />
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
                  <SidebarOwner />
                  <OwnerAddSupervisor />
                </div>
              </React.Fragment>
            }
          />
          {/* OWNER ROUTES END */}

          {/* CUSTOMER ROUTES START */}
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
          {/* CUSTOMER  ROUTES END */}

          {/* SUPERVISOR ROUTES START */}
          <Route
            exact
            path="/supervisor/overview"
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
            path="/supervisor/MessageSupervisor"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <MessageSupervisor />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/supervisor/profile"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <ProfileSupervisor />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/supervisor/MilkCollectionSupervisor"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <MilkCollectionSupervisor />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/supervisor/DirectSellSupervisor"
            element={
              <React.Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                  <SidebarSupervisor />
                  <DirectSellSupervisor />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/supervisor/AhiSupervisor"
            element={
              <React.Fragment>
                <div id="wrapper">
                  <SidebarSupervisor />
                  <AhiSupervisor />
                </div>
              </React.Fragment>
            }
          />

          <Route
            path="/supervisor/CustomerFormSupervisor"
            element={
              <React.Fragment>
                <div id="wrapper">
                  <SidebarSupervisor />
                  <CustomerFormSupervisor />
                </div>
              </React.Fragment>
            }
          />
          {/* SUPERVISOR  ROUTES END */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
