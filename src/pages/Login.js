import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="container">
                    <h2 className="section-heading">Login</h2>

                    {/* className="navbar-form-search" */}
                    <form className="form">
                        <div>
                            <label htmlFor="email">Enter Your Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder=" "
                                className="formInput"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Enter Your Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                className="formInput"
                                required
                            />
                        </div>

                        <div>
                            {/* className="navbar-form-close" */}
                            <button type="submit" className="btn">
                                SignUp
                            </button>
                        </div>
                    </form>
                    <div className="outher">
                        <Link
                            to="/restpassword"
                            className="btn"
                            style={{ textAlign: "center" }}
                        >
                            RestPassword
                        </Link>

                        <Link
                            to="/signup"
                            className="btn"
                            style={{ textAlign: "center" }}
                        >
                            SignUp
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
