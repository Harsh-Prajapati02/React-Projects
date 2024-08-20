import { useState } from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../Services/firebase'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // For Email and Password Login
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Login Successfully...")
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      alert("Incorrect Email OR Password")
    })
  }

  // For Google Login
  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then((res) => {
      alert("Login Successfully...")
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // For Logout
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
          <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
            <input onChange={(e) => setEmail(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Password' />
            <button className='login-btn p-3 pb-2 mb-3'>LOG IN</button>
          </form>
          <button onClick={handleLogout} className='logout-btn p-3 pb-2 mb-3'>LOG OUT</button>
          <hr />
          <GoogleButton onClick={handleLogin}/>
        </div>
      </div>

    </>

  )
}

export default Login