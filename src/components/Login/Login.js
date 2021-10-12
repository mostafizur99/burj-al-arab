import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>New to Burj Al Arab? <Link to="/register">Create Account</Link></p>

                <div>-------or----------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;