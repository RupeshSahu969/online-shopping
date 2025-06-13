import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cart from '../Pages/Cart'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </div>
    )
}

export default MainRoute
