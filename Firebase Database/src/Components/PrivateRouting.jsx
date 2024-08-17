import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Services/firebase';

const PrivateRouting = ({children}) => {

  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={"/login"}></Navigate>
  } 
  return children
}

export default PrivateRouting
