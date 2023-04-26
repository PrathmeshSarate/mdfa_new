import HomeApp from "./HomeApp";
import Login from "./components/Login";
import dai from "./assets/img/dai.jpg";
import "./App.css";
import {
  BrowserRouter,
  Routes, Route,
  // Switch, 
  // NavLink, 
  Link
} from 'react-router-dom'
import Dash from "./components/customer/Dash";

import Message from './components/customer/Message';
import Overview from './components/customer/Overview';
import Sidebar from './components/customer/Sidebar';
import React from "react";
import Ahi from "./components/customer/Ahi";
import Profile from "./components/customer/Profile";
import Recipt from "./components/customer/Recipt";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<HomeApp />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dash" element={<HomeApp/>} />

          <Route path="/member/ahi" element={
            <React.Fragment>
              <div id="wrapper">
              <Sidebar/>
              <Ahi/>
              </div>
            </React.Fragment>
           } />

          <Route exact path="/member/overview" element={
            <React.Fragment>
              {/* Page Wrapper */}
              <div id="wrapper">
                <Sidebar />
                <Overview />
              </div>
            </React.Fragment>
          } />

          <Route path="/member/message" element={
           <React.Fragment>
           {/* Page Wrapper */}
           <div id="wrapper">
             <Sidebar />
             <Message />
           </div>
         </React.Fragment>
          } />

          <Route path="/member/profile" element={
           <React.Fragment>
           {/* Page Wrapper */}
           <div id="wrapper">
             <Sidebar />
             <Profile/>
           </div>
         </React.Fragment>
          } />

          <Route path="/member/recipt" element={
           <React.Fragment>
           {/* Page Wrapper */}
           <div id="wrapper">
             <Sidebar />
             <Recipt/>
           </div>
         </React.Fragment>
          } />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
