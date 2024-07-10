import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

let initialState = {
    name : "",
    email : "",
    password : "",
    grade : "",
    gender : ""
}

const StudentForm = () => {

    const [formData, setFormData] = useState(initialState)
    const {name, email, password, grade} = formData;

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <div className='student-info p-4'>
            <h2 className='mb-4 pb-2 pt-2'>Student Registration Form</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className='name d-flex flex-column mb-3'>
                    <label className='text-start mb-2' htmlFor="name">Full Name</label>
                    <input className='ps-2' name='name' value={name} onChange={(e) => handleChange(e)} type="text" placeholder='Enter Your Name'/>
                </div>
                <div className='email d-flex flex-column mb-3'>
                    <label className='text-start mb-2' htmlFor="email">E-Mail</label>
                    <input className='ps-2' name='email' value={email} onChange={(e) => handleChange(e)} type="email" placeholder='Enter Your Email'/>
                </div>
                <div className='password d-flex flex-column mb-3'>
                    <label className='text-start mb-2' htmlFor="password">Password</label>
                    <input className='ps-2' name='password' value={password} onChange={(e) => handleChange(e)} type="password" placeholder='Enter Your Password'/>
                </div>
                <div className='grade d-flex flex-column mb-3'>
                    <label className='text-start mb-2' htmlFor="grade">Grade</label>
                    <select className='ps-2' name="grade" value={grade} onChange={(e) => handleChange(e)}>
                        <option value="">Select Your Grade</option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
                <div className='gender d-flex flex-column mb-3  '>
                    <label className='text-start mb-2' htmlFor="gender">Gender</label>
                    <div className='male d-flex flex-row text-start align-items-center mb-2'>
                    <input className='me-2' value={"male"} onChange={(e) => handleChange(e)} type="radio" name='gender'/> Male
                    </div>
                    <div className='female d-flex flex-row text-start align-items-center mb-2'>
                    <input className='me-2' value={"female"} onChange={(e) => handleChange(e)} type="radio" name='gender'/> Female
                    </div>
                    <div className='other d-flex flex-row text-start align-items-center mb-2'>
                    <input className='me-2' value={"other"} onChange={(e) => handleChange(e)} type="radio" name='gender'/> Other
                    </div>
                </div>
                <input className='submit-btn' type="submit" />
            </form>
        </div>
    )
}

export default StudentForm
