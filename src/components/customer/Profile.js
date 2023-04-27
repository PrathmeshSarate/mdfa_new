import React from 'react'
import Topbar from './Topbar'

function Profile() {
    return (
        <>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {<Topbar title="Profile" />}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="ABC XYZ"
                                    value="ABC XYZ"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="abcxyz@gmail.com"
                                    value="abcxyz@gmail.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone No.
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="+91 01234 56789"
                                    value="+91 01234 56789"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Address
                                </label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    rows={3}
                                    defaultValue={"Near Chitranagari,Kangalgav,Kolhapur"}
                                    placeholder={"Near Chitranagari,Kangalgav,Kolhapur"}
                                />
                            </div>
                            
                            <button type="submit " className='btn btn-success'>Update</button>
                        </>

                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
        </>
    )
}

export default Profile