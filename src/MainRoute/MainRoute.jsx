import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import About from '../Pages/About'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </div>
    )
}

export default MainRoute
