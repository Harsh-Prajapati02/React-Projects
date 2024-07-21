import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
  const isAuth = localStorage.getItem("token")

  if (!isAuth) {
    return <Navigate to={"/login"}></Navigate>
  } 
  return children
}

export default PrivateRouting
