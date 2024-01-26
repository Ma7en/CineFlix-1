import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Links = () => {
    return (
        <>
            <div className="links">
                <div className="container">
                    <div className="brand">
                        <img src={logo} alt="footer-logo" className="logo" />

                        <p className="slogan">
                            Movies &amp; TV Shows, Online cinema, Movie database
                            ReactJS Template.
                        </p>

                        <div className="social">
                            <a href="#">
                                <ion-icon name="logo-facebook" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-twitter" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-instagram" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-tiktok" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-youtube" />
                            </a>
                        </div>
                    </div>

                    <div className="content">
                        <ul>
                            <h4 className="link-heading">CineFlix</h4>
                            <li className="link-item">
                                <Link to="/aboutus">About us</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">My profile</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Pricing plans</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Contacts</Link>
                            </li>
                        </ul>

                        <ul>
                            <h4 className="link-heading">Browse</h4>
                            <li className="link-item">
                                <Link to="/editing">Live Tv</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Live News</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Live Sports</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Streaming Library</Link>
                            </li>
                        </ul>

                        <ul>
                            <h4 className="link-heading">Shows</h4>
                            <li className="link-item">
                                <Link to="/editing">TV Shows</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Movies</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Kids</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Collections</Link>
                            </li>
                        </ul>
                        <ul>
                            <h4 className="link-heading">Help</h4>
                            <li className="link-item">
                                <Link to="/editing">Account &amp; Billing</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Plans &amp; Pricing</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Supported devices</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Accessibility</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Links;
