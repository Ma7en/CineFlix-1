import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="container">
                    <div className="copyright">
                        <p>© copyright {year} M7S</p>
                    </div>
                    {/* <div className="wrapper">
                            <Link to="/editing">Privacy policy</Link>
                            <Link to="/editing">Terms and conditions</Link>
                        </div> */}
                </div>
            </footer>
        </>
    );
};

export default Footer;
