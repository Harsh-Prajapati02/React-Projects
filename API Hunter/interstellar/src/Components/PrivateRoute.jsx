import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const {isAuth} = useContext(AuthContext);

    if (!isAuth.token) {
        return <Navigate to={"/login"}></Navigate>
    } else {
        return children
    }
}

export default PrivateRoute;