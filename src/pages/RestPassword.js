import React from "react";
import { Link } from "react-router-dom";

const RestPassword = () => {
    return (
        <>
            <section className="restpassword">
                <div className="container">
                    <h2 className="section-heading">SignUp</h2>

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
                            {/* className="navbar-form-close" */}
                            <button type="submit" className="btn">
                                RestPassword
                            </button>
                        </div>
                    </form>

                    <div className="outher">
                        <Link
                            to="/signup"
                            className="btn"
                            style={{ textAlign: "center" }}
                        >
                            SignUp
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

export default RestPassword;
