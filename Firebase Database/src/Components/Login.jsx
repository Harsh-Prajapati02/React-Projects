import GoogleButton from 'react-google-button'
import { auth, provider } from '../Services/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const Login = () => {

  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then((res) => {
      alert("Login Successfully...")
      // console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleLogout = () => {
    signOut(auth)
    .then((res) => {
      alert("Logout...")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <h1 className='mt-0'>Login</h1>
      </div>
      <div className='d-flex align-items-center justify-content-center p-5' style={{ borderBottom: "2px solid #f0f0f0" }}>
        <div className='login col-5 p-5 pt-4 p  b-4'>
          <h3 className='mb-1'>Welcome Back !</h3>
          <h3 className='mb-5'>Please Sign in now</h3>
          <GoogleButton onClick={handleLogin}/>
          <button onClick={handleLogout} className='logout-btn p-3 pb-2 mt-3'>LOG OUT</button>
        </div>
      </div>

    </>

  )
}

export default Login
