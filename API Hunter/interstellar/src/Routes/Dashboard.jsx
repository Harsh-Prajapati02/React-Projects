import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import Home from "./Home";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Dashboard() {

  const baseURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com";
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  // C --> Consume Context
  const {isAuth, logoutUser} = useContext(AuthContext);

  const dataFromServer = () => {
    axios.get(`${baseURL}/mockapi/get-tech-products`)
      .then((res) => {
        setData(res.data.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      })
  }

  useEffect(() => {
    dataFromServer()
  }, [])

  return loading ? <Loader /> : (
    <>
      <Home />
      <div className="dashboard p-5">
        <h1 className="mb-4">Dashboard</h1>
        <div>
          <button onClick={logoutUser} className="mb-3" data-testid="logout-btn">Logout</button>
          <p>
            Token: {isAuth.token}
            <b data-testid="user-token"></b>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Products table */}
          <ProductsTable data={data} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
