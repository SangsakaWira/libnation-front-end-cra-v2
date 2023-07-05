import { Link } from "react-router-dom";

function Login(){
    return(
        <>
            <section>
        <div class="container">
            <div class="login">
                <img src="assets/images/logo.png" alt="logo" class="login-logo"/>
                <form action="">
                    <div class="input-field">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div class="input-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password"/>
                        <Link to="/forget-password">Forget password</Link>
                    </div>
                    <div class="input-field">
                        <input type="submit" value="LOGIN" class="btn btn-primary"/>
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