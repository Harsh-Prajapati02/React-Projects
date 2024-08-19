import axios from 'axios'
import { useState } from 'react'
import { auth, provider } from '../Services/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            alert("Sign-Up Successfully...")
            console.log(res)
        })
        .catch((err) => {
            alert("Password should be at least 6 characters")
            console.log(err)
        })
    }

    return (
        <>
            <div className='banner d-flex justify-content-center align-items-center'>
                <h1 className='mt-0'>Sign Up</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center p-5' style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className='login col-5 p-5 pt-4 p  b-4'>
                    <h3 className='mb-1'>Welcome Back !</h3>
                    <h3 className='mb-5'>Please Sign Up now</h3>
                    <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
                        <input onChange={(e) => setEmail(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Password' />
                        {/* <input className='submit-btn p-3 pb-2' type="submit" /> */}
                        <button className='login-btn p-3 pb-2 mb-3'>Create Account</button>
                    </form>
                    {/* <button onClick={logoutFunction} className='logout-btn p-3 pb-2 mb-3'>LOG OUT</button> */}
                </div>
            </div>
        </>
    )
}

export default SignUp
