import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate()
    const [loading] = useState(false)

    const login = (events) => {
        const {username,password} = events.target
        if(username.value === "admin" & password.value === "admin"){
            console.log("Login Sukses!")
            localStorage.setItem('token',username.value)
            navigate("/")
        }
        events.preventDefault()
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate("/login")
        }else{
            navigate("/")
        }
    },[navigate,loading])

    return (
        <>
            <section>
                <div className="container">
                    <div className="login">
                        <img src="assets/images/logo.png" alt="logo" className="login-logo" />
                        <form onSubmit={login} method="POST">
                            <div className="input-field">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" />
                                <Link to="/forget-password">Forget password</Link>
                            </div>
                            <div className="input-field">
                                <input type="submit" value="LOGIN" className="btn btn-primary" />
                                <Link to="/register">Don’t have an account? Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;