import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"

import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import { API } from '../constants'
import jwt_decode from "jwt-decode";

import axios from "axios";


const AppLayout = ({ children }) => {

    let navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            console.log(token)
            if (!token) {
                navigate("/login")
            }
        } catch (err) {
            localStorage.removeItem('token')
        }
    }, [])

    return (
        <>
            <NavBar></NavBar>
            <Layout>
                {children}
            </Layout>
        </>
    )
}

export default AppLayout