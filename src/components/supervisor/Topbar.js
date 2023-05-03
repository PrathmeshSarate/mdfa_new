import React from 'react'

import Clock from "react-live-clock";
import profilePic from './img/undraw_profile.svg'

function Topbar(props) {
    return (
        <>
            {/* NAVBAR */}
          <nav className="col-md-12">
            <h1 className="mt-2">
              <Clock
                format={"h:mm:ss A"}
                ticking={true}
                timezone={"Asia/Kolkata"}
              />
            </h1>
            <div className="ms-auto">
              <a aria-readonly title="Your Name displayed here" href="#" className="profile">
                <img src={profilePic} alt="Profile Photo" />
              </a>
            </div>
          </nav>
          {/* NAVBAR */}
        </>
    )
}

export default Topbar