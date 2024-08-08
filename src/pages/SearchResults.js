/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { apiKey, apiLink, imagePath } from "../utils/constants";
import Empty from "../ui/error/Empty";
import Spinner from "../ui/spinner/Spinner";

const SearchResults = () => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // if (!query) return <Spinner />;

    useEffect(() => {
        const handleSearch = async () => {
            // e.preventDefault();

            if (query) {
                try {
                    const response = await axios.get(
                        `${apiLink}search/movie?api_key=${apiKey}&query=${query}`
                    );
                    setSearchResults(response.data.results);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                    setLoading(false);
                    console.error("Error searching movies:", error);
                }
            }
        };
        handleSearch();
    }, [query]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    `${apiLink}genre/movie/list?api_key=${apiKey}`
                );
                setGenres(response.data.genres);
            } catch (error) {
                setError(true);
                console.error("Error fetching genres:", error);
            }
        };

        fetchGenres();
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .filter(Boolean)
            .join(", ");
    };

    if (loading) return <Spinner />;
    if (error) return <Empty resourceName="Search Results" />;

    return (
        <>
            <section className="movies">
                <div className="container">
                    {/* {searchResults.length > 0 && (
                     */}
                    <div className="movies-grid">
                        {searchResults.map((movie) => (
                            <div className="movie-card" key={movie.id}>
                                <div className="card-head">
                                    <img
                                        // src={`${imagePath}${movie.poster_path}`}
                                        src={
                                            movie.poster_path
                                                ? `${imagePath}${movie.poster_path}`
                                                : ""
                                        }
                                        alt=""
                                        className="card-img"
                                    />
                                    <div className="card-overlay">
                                        <div className="bookmark">
                                            <ion-icon name="bookmark-outline" />
                                        </div>
                                        <div className="rating">
                                            <ion-icon name="star-outline" />
                                            <span>
                                                {movie.vote_average.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="play">
                                            <Link
                                                to={`/movieDetails/${movie.id}`}
                                            >
                                                <ion-icon name="play-circle-outline" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>
                                    <div className="card-info">
                                        <span className="genre">
                                            {getGenreNames(movie.genre_ids)}
                                        </span>
                                        <span className="year">
                                            {/* {new Date(
                                                movie.release_date
                                            ).getFullYear()} */}
                                            {movie.release_date &&
                                                new Date(
                                                    movie.release_date
                                                ).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* )} */}
                    <Link
                        to="/"
                        className="goback"
                        style={{ textAlign: "center" }}
                    >
                        Go Back
                    </Link>
                </div>
            </section>
        </>
    );
};

export default SearchResults;
