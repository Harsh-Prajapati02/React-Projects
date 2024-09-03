import React from 'react'
import logo from '../images/logo.webp'
// Icons
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (<>
        <div className='footer container p-5 ps-0 pe-0'>
            <div className="row">
                <div className="col-3">
                    <img className='mb-5' src={logo} alt="" />
                    <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                </div>
                <div className="col-3 text-center">
                    <h4 className='mb-4'>Quick Links</h4>
                    <ul className='ps-0'>
                        <li className='mb-3'><a href="">About</a></li>
                        <li className='mb-3'><a href="">Offers & Discounts</a></li>
                        <li className='mb-3'><a href="">Get Coupon</a></li>
                        <li className='mb-3'><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-3 text-center">
                    <h4 className='mb-4'>New Products</h4>
                    <ul className='ps-0'>
                        <li className='mb-3'><a href="">Woman Cloth</a></li>
                        <li className='mb-3'><a href="">Fashion Accessories</a></li>
                        <li className='mb-3'><a href="">Man Accessories</a></li>
                        <li className='mb-3'><a href="">Rubber made Toys</a></li>
                    </ul>
                </div>
                <div className="col-3 text-end">
                    <h4 className='mb-4'>Support</h4>
                    <ul className='ps-0'>
                        <li className='mb-3'><a href="">Frequently Asked Questions</a></li>
                        <li className='mb-3'><a href="">Terms & Conditions</a></li>
                        <li className='mb-3'><a href="">Privacy Policy</a></li>
                        <li className='mb-3'><a href="">Report a Payment Issue</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer-botton p-0 container d-flex justify-content-between'>
            <p className='Copyright'> ©2024 All rights reserved | This template is made with <FaHeart style={{color:"#ff2020"}}/> by <a href="">Colorlib</a></p>
            <p className='icons'>
                <a className='ms-4' href=""><FaTwitter /></a>
                <a className='ms-4' href=""><FaFacebookF /></a>
                <a className='ms-4' href=""><FaBehance /></a>
                <a className='ms-4' href=""><FaGlobe /></a>
            </p>
        </div>
    </>
    )
}

export default Footer
