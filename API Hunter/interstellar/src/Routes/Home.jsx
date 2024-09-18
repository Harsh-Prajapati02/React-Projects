import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex justify-content-around align-items-center pt-3 pb-3" style={{borderBottom:"3px solid whitesmoke"}}>
      <Link className="nav-link" to="/dashboard">
        <h3 className="mb-0" data-testid="home-link">Home</h3>
      </Link>
      <Link className="nav-link" to="/login">
        <h3 className="mb-0" data-testid="login-link">Login Page</h3>
      </Link>
    </div>
  );
}
export default Home;
