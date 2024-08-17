import React from 'react';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from "../src/img/logo.png";
const Login = () => {
  return (
    <div className='Loginstyle'>
    <div className="container-fluid">
      <div className="row">
        {/* IMAGE CONTAINER BEGIN */}
        <div className="col-lg-6 col-md-6 d-none d-md-block infinity-image-container"></div>
        {/* IMAGE CONTAINER END */}

        {/* FORM CONTAINER BEGIN */}
        <div className="col-lg-6 col-md-6 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            {/* Company Logo */}
            <div className="text-center mb-3 mt-5">
              <img src={logo} width="150px" alt="Company Logo" />
            </div>
            <div className="text-center mb-4">
              <h4>Login into account</h4>
            </div>
            {/* Form */}
            <form className="px-3">
              {/* Input Box */}
              <div className="form-input">
                <span><i className="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-input">
                <span><i className="fa fa-lock"></i></span>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="row mb-3">
                {/* Remember Checkbox */}
                <div className="col-auto d-flex align-items-center">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="cb1" />
                    <label className="custom-control-label" htmlFor="cb1">Remember me</label>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <div className="mb-3">
                <button type="submit" className="btn btn-block">Login</button>
              </div>
              {/* Forget Password */}
              {/* <div className="text-right">
                <a href="reset.html" className="forget-link">Forgot password?</a>
              </div> */}

              {/* <div className="text-center mb-2">
                <div className="text-center mb-3" style={{ color: '#777' }}>or login with</div>

               
              </div> */}

              {/* <div className="text-center mb-5" style={{ color: '#777' }}>
                Don't have an account? <a className="register-link" href="register.html">Register here</a>
              </div> */}
            </form>
          </div>
          {/* FORM END */}
        </div>
        {/* FORM CONTAINER END */}
      </div>
    </div></div>
  );
};

export default Login;
