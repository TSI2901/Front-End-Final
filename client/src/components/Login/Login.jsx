import { Link } from "react-router-dom";
import useForms from "../../hooks/useForms";
import { useContext } from "react";

import AuthContext from "../../context/authContext";





const LoginFormKeys = {
    email: 'email',
    password: 'password'
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForms(loginSubmitHandler, {
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: ''
    });

    return (
        <form onSubmit={onSubmit} className="login-form mx-auto color-light-orange p-4 rounded border">

            {/* <div className="container image-container my-2">
                <img src="./public/small-logo.png" alt="Logo" />
            </div> */}

            <h1 className="text-center mb-2">Login</h1>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={onChange}
                    name={LoginFormKeys.email}
                    value={values[LoginFormKeys.email]} />
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={onChange}
                    name={LoginFormKeys.password}
                    value={values[LoginFormKeys.password]} />
            </div>

            <button type="submit" className="btn color-orange mb-2 d-block mx-auto w-50">Login</button>

            <div className="text-center">
                <p>Not a member? <Link to={'/Register'} className="text-orange text-dark-orange">Register</Link></p>
            </div>
        </form>
    )
}
