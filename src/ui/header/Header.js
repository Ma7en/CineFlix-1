/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink, useNavigate } from "react-router-dom";

import { apiKey, apiLink } from "../../utils/constants";

import logo from "../../images/logo.png";

const Header = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const [navbar, setNavbar] = useState(false);
    const [searchBtn, setSearchBtn] = useState(false);
    const navigate = useNavigate();

    // console.log(`search=>`, searchResults);
    // console.log("query=>", query);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query) {
            try {
                const response = await axios.get(
                    `${apiLink}search/movie?api_key=${apiKey}&query=${query}`
                );
                setSearchResults(response.data.results);
            } catch (error) {
                console.error("Error searching movies:", error);
            }
        }
    };

    return (
        <>
            <header className={navbar ? "active" : ""}>
                <div className="container">
                    <div className="navbar">
                        <div className="bar">
                            <button
                                className={
                                    navbar
                                        ? "navbar-menu-btn active "
                                        : "navbar-menu-btn "
                                }
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            >
                                <span className="one" />
                                <span className="two" />
                                <span className="three" />
                            </button>

                            <Link to="/" className="navbar-brand">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>

                        <nav className={navbar ? "active" : ""}>
                            <ul className="navbar-nav">
                                <li>
                                    <NavLink to="/" className="navbar-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/#movies" className="navbar-link">
                                        Movies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/#category"
                                        className="navbar-link"
                                    >
                                        Category
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/#live"
                                        className="navbar-link indicator"
                                    >
                                        LIVE
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="navbar-actions">
                            <form
                                action="#"
                                className={
                                    searchBtn
                                        ? "navbar-form active"
                                        : "navbar-form"
                                }
                                onSubmit={handleSearch}
                            >
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="I'm looking for..."
                                    className="navbar-form-search"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        if (!e.target.value) {
                                            setSearchResults([]);
                                        }
                                    }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="navbar-form-btn"
                                    onClick={() => {
                                        // console.log(
                                        //     `e=>`,
                                        //     e.view.document.querySelector(
                                        //         ".navbar-form-search"
                                        //     ).value
                                        // );
                                        // if (
                                        //     e.view.document.querySelector(
                                        //         ".navbar-form-search"
                                        //     ).value
                                        if (query.length) {
                                            navigate(`/search/${query}`);
                                        }
                                    }}
                                >
                                    <ion-icon name="search-outline" />
                                </button>

                                <button
                                    type="button"
                                    className="navbar-form-close"
                                    onClick={() => {
                                        setSearchBtn(!searchBtn);
                                        setQuery("");
                                        setSearchResults([]);
                                    }}
                                >
                                    <ion-icon name="close-circle-outline" />
                                </button>
                            </form>

                            <button
                                className="navbar-search-btn"
                                onClick={() => {
                                    setSearchBtn(!searchBtn);
                                }}
                            >
                                <ion-icon name="search-outline" />
                            </button>

                            <Link to="/signup" className="navbar-signin">
                                <span>Sign in</span>
                                <ion-icon name="log-in-outline" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* {searchResults.length > 0 && (
                <section className="movies">
                    <div className="movies-grid">
                        {searchResults.map((movie) => (
                            <div className="movie-card" key={movie.id}>
                                <div className="card-head">
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt=""
                                        className="card-img"
                                    />
                                    <div className="card-overlay">
                                        <div className="bookmark">
                                            <ion-icon name="bookmark-outline" />
                                        </div>
                                        <div className="rating">
                                            <ion-icon name="star-outline" />
                                            <span>{movie.vote_average}</span>
                                        </div>
                                        <div className="play">
                                            <ion-icon name="play-circle-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>
                                    <div className="card-info">
                                        <span className="genre">
                                            Action/Comedy
                                        </span>
                                        <span className="year">
                                            {new Date(
                                                movie.release_date
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )} */}
        </>
    );
};

export default Header;
