import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import logo from '../images/logo.webp'

export const Navbar = () => {
    return (<>
        <div expand="lg" className='navbar pt-3 pb-3 container d-flex justify-content-between'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-links d-flex align-items-center">
                <NavLink className='nav_link p-4' to={"/"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Home</NavLink>
                <NavLink className='nav_link p-4' to={"/about"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>About</NavLink>
                <NavLink className='nav_link p-4' to={"/contact"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Contact</NavLink>
                <NavLink className='nav_link p-4' to={"/products"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Products</NavLink>
                <NavLink className='nav_link p-4' to={"/blog"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Blog</NavLink>
                <NavLink className='nav_link p-4' to={"/services"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Services</NavLink>
            </div>
            <div className='d-flex align-items-center'>
                <NavLink className="nav_link p-4" to={"/add-watch"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Add New Watch</NavLink>
                <NavLink className="nav_link p-4" to={"/login"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}>Sign-in</NavLink>
                <NavLink className="nav_link p-4" to={"/cart"} style={({isActive}) => {
                    return isActive ? {color:"#ff2020"} : {color:"#141517"}
                }}><FaCartShopping />
                </NavLink>
            </div>
        </div>
    </>
    )
}

export default Navbar