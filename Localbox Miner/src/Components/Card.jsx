import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';
import image from "../images/apple_watch.png"


const Card = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='card p-4' style={{backgroundColor: theme == "light" ? "white" : "#0f111a", color: theme == "light" ? "black" : "white", borderRadius:"10px"}}>
            <div className="image mb-4 text-center">
                <img src={image} height={300} alt="" />
            </div>
            <h3 className='title mb-3'>Apple Watch Series 9 [GPS + Cellular 45mm]</h3>
            <p className='rating d-flex justify-content-start align-items-center'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><span style={{backgroundColor: "#d2e4fc", color: "black", borderRadius:"5px", fontWeight:"600"}} className='ms-2 ps-2 pe-2'>4.5</span></p>
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className='price'><sup style={{fontSize:"19px"}}>₹</sup>54,900</h2>
                <button className='add-to-cart-btn' style={{ backgroundColor: theme == "light" ? "#1a73e8" : "white", color: theme == "light" ? "white" : "black" }}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
