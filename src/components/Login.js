import { Link } from "react-router-dom";
function Login() {
  const uniBackColor = "#4154f1"
  return (
    <>
      <div className="container mt-5">
        <div className="login-page bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="mb-3 text-center p-4 "><b>Login Now</b></h3>
                <div className="bg-white shadow rounded">
                  <div className="row">
                    <div className="col-md-7 pe-0">
                      <div className="form-left h-100 py-5 px-5">
                        <form action="" className="row g-4">
                          <div className="col-12">
                            <label>
                              Username<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-person-fill" />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <label>
                              Password<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-lock-fill" />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Password"
                              />
                            </div>
                          </div>
                          <div className="col-12">

                            <Link to="/owner/overview" type="submit" className="btn btn-outline-info px-4 float-start mt-4 ms-2" >Owner</Link>

                            <Link to="/member/overview" type="submit" style={{ backgroundColor: uniBackColor, color: "white" }}className="btn px-4 float-end mt-4 ms-5" >Customer</Link>

                            <Link to="/supervisor/overview" type="submit" className="btn btn-warning px-4 float-end mt-4 ms-2" >Supervisor</Link>

                            <Link to="/" type="submit" className="btn btn-danger px-4 float-start mt-4" >←</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 ps-0 d-none d-md-block">
                      <div className="form-right h-100 text-white text-center pt-5" style={{ backgroundColor: uniBackColor }}>
                        <i className="bi bi-person-square" style={{ fontSize: "100px" }} />
                        <h2 className="fs-1">Login</h2>
                        <small>Don't share your password with anyone.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Login;
