import { Link, Navigate } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // C --> Consume Context
  const { isAuth, loginUser } = useContext(AuthContext);

  const userData = {
    email,
    password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://reqres.in/api/login", userData)
      .then((res) => {
        alert("Login Successfully...")
        loginUser(res.data.token)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Home />
      {isAuth.token ? <Navigate to={"/dashboard"}></Navigate> : (
        <div className="p-5 align-items-center d-flex flex-column justify-content-center" style={{height:"90vh"}}>
          <form className="login-form col-4 p-5 pb-4" onSubmit={handleSubmit} data-testid="login-form">
            <div className="d-flex flex-column text-start mb-3">
              <label className="mb-1">Email</label>
              <input
                  className="ps-2"
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email-input"
                  type="email"
                  placeholder="email" />
            </div>
            <div className="d-flex flex-column text-start mb-4">
              <label className="mb-1">Password</label>
              <input
                  className="ps-2"
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password-input"
                  type="password"
                  placeholder="password"
                />
            </div>
            <div>
              <input className="submit-btn mb-3" data-testid="form-submit" type="submit" value="SUBMIT" />
            </div>
            <div>
            <Link className="back-btn" to="/dashboard">Go Back</Link>
          </div>
          </form>
        </div>
      )}

    </>
  );
}
export default Login;
