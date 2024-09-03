import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Products from '../Components/Products'
import Blog from '../Components/Blog'
import Services from '../Components/Services'
import Login from '../Components/Login'
import Cart from '../Components/Cart'
import PrivateRouting from '../Components/PrivateRouting'
import Description from '../Components/Description'
import NotFoundPage from '../Components/NotFoundPage'
import AddWatch from '../Components/AddWatch'
import EditWatchData from '../Components/EditWatchData'
import SignUp from '../Components/SignUp'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/products' element={
                <PrivateRouting>
                    <Products />
                </PrivateRouting>
                }></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/add-watch' element={<AddWatch />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/description/:id' element={<Description />}></Route>
            <Route path='/edit/:id' element={<EditWatchData />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default AllRoutes
