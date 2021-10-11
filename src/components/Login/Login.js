import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
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
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;