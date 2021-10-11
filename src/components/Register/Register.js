import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Your Password" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>

                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
}; export default Register;
