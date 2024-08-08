import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <section className="signup">
                <div className="container">
                    <h2 className="section-heading">SignUp</h2>

                    <form className="form">
                        <div>
                            <label htmlFor="name">Enter Your Name</label>

                            <input
                                id="name"
                                type="text"
                                name="search"
                                placeholder=" "
                                className="formInput"
                                required
                            />
                        </div>

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
                            to="/login"
                            className="btn"
                            style={{ textAlign: "center" }}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
