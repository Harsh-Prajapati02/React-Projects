import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../Services/firebase';

const AddWatch = () => {

    let initialState = {
        change: "",
        image: "",
        title: "",
        price: "",
        rate: "",
        count: "",
        type: "",
        color: "",
        bandMaterial: "",
        description: "",
        code: ""
    };

    const [watchData, setwatchData] = useState(initialState);

    const { change, image, title, price, rate, count, type, color, bandMaterial, description, code } = watchData;

    const handleChange = (e) => {
        setwatchData({ ...watchData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "products"), watchData)
            .then((res) => {
                alert("Watch Added Successfully...")
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className='banner d-flex justify-content-center align-items-center'>
                <h1>Add Watch</h1>
            </div>
            <div className='container p-5' style={{ borderBottom: "2px solid #f0f0f0", borderTop: "2px solid #f0f0f0" }}>
                <div className="row justify-content-center">
                    <div className="add-watch col-5">
                        <h3 className='mb-1'>Welcome Back !</h3>
                        <h3 className='mb-5'>Add New Watch here</h3>
                        <form action="" onSubmit={(e) => handleSubmit(e)} className='d-flex flex-column'>
                            <input name='change' value={change} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Change in Watch' />
                            <input name='image' value={image} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Image Url of Watch' />
                            <input name='title' value={title} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Watch Title' />
                            <input name='price' value={price} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Watch Price' />
                            <input name='rate' value={rate} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Rating of Watch' />
                            <input name='count' value={count} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Ratind Count of Watch' />
                            <select className='mb-3 p-2' value={type} onChange={(e) => handleChange(e)} name="type" id="">
                                <option value="">Select Type of Watch</option>
                                <option value="analog">analog</option>
                                <option value="digital">digital</option>
                                <option value="ana-digi">ana-digi</option>
                            </select>
                            <input name='color' value={color} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Color of Watch' />
                            <select className='mb-3 p-2' name="bandMaterial" value={bandMaterial} onChange={(e) => handleChange(e)} id="">
                                <option value="">Select Band Material of Watch</option>
                                <option value="stainless-steel">stainless-steel</option>
                                <option value="rubber">rubber</option>
                                <option value="leather">leather</option>
                            </select>
                            <input name='description' value={description} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Description of Watch' />
                            <input name='code' value={code} onChange={(e) => handleChange(e)} className='p-2 ps-3 mb-3' type="text" placeholder='Enter Watch Code' />
                            <button className='add-watch-btn p-3 pb-2'>Add Watch</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddWatch
