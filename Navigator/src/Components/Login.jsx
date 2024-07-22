import axios from 'axios'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    axios.post("https://reqres.in/api/login", userData)
    .then((res) => {
      let tokenFromReqresApi = res.data.token
      alert("Login Successfully...")
      localStorage.setItem("token", tokenFromReqresApi)
    })
    .catch((err) => console.log(err))
  }

  const logoutFunction = () => {
    localStorage.removeItem("token")
    window.location.href("/login")
  }

  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <h1 className='mt-0'>Login</h1>
      </div>
      <div className='d-flex align-items-center justify-content-center p-5' style={{borderBottom:"2px solid #f0f0f0"}}>
        <div className='login col-5 p-5 pt-4 p  b-4'>
          <h3 className='mb-1'>Welcome Back !</h3>
          <h3 className='mb-5'>Please Sign in now</h3>
          <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
            <input onChange={(e) => setEmail(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Password' />
            {/* <input className='submit-btn p-3 pb-2' type="submit" /> */}
            <button className='login-btn p-3 pb-2 mb-3'>LOG IN</button>
            
          </form>
          <button onClick={logoutFunction} className='logout-btn p-3 pb-2'>LOG OUT</button>
        </div>
      </div>

    </>

  )
}

export default Login
