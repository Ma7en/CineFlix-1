import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { apiKey, apiLink, imagePath } from "../../utils/constants";
import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

const MovieDetails = () => {
    const { id } = useParams();
    const [genres, setGenres] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [error, setError] = useState(null);

    console.log(`g`, genres);

    // تحويل الوقت إلى الشكل المطلوب
    const hours = Math.floor(movieDetails.runtime / 60);
    const minutes = movieDetails.runtime % 60;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `${apiLink}movie/${id}?api_key=${apiKey}`
                );
                setMovieDetails(response.data);
            } catch (error) {
                setError(true);
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }, [id]);

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

    // const getGenreNames = (genreIds) => {
    //     return genreIds
    //         .map((id) => genres.find((genre) => genre.id === id)?.name)
    //         .filter(Boolean)
    //         .join(", ");
    // };

    const genresDisplay =
        movieDetails && movieDetails.genres
            ? movieDetails.genres.map((genre) => genre.name).join(" / ")
            : "";

    // if (!movieDetails) {
    //     return <p>Loading...</p>;
    // }
    if (!movieDetails || Object.keys(movieDetails).length === 0) {
        return <Spinner />;
    }
    // if (!movieDetails) return <Spinner />;
    if (error) return <Empty resourceName="movie" classN="banner" />;

    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="card">
                        <img
                            // src={`${imagePath}${movieDetails.poster_path}`}
                            src={`${imagePath}${movieDetails.backdrop_path}`}
                            className="banner-img"
                            alt={movieDetails.title}
                        />
                        <div className="card-content">
                            <div className="card-info">
                                <div className="genre">
                                    <ion-icon name="film" />
                                    <span>{genresDisplay}</span>
                                </div>
                                <div className="year">
                                    <ion-icon name="calendar" />
                                    <span>
                                        {new Date(
                                            movieDetails.release_date
                                        ).getFullYear()}
                                    </span>
                                </div>
                                <div className="duration">
                                    <ion-icon name="time" />
                                    <span>
                                        {hours}h {minutes}m
                                    </span>
                                </div>
                                <div className="quality">4K</div>
                            </div>
                            <h2 className="card-title">{movieDetails.title}</h2>
                        </div>
                    </div>

                    <Link
                        to="/#movies"
                        className="goback"
                        style={{ textAlign: "center" }}
                    >
                        Go Back
                    </Link>
                </div>
            </section>

            {/* <section className="moviesdetails">
                <div className="movies-grid">
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src={`${imagePath}${movieDetails.poster_path}`}
                                alt={movieDetails.title}
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>{movieDetails.vote_average}</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{movieDetails.title}</h3>
                            <div className="card-info">
                                <span className="genre">
                                        //  {getGenreNames(movie.genre_ids)}
                                        {movieDetails.genre_ids &&
                                        getGenreNames(movieDetails.genre_ids)}
                                        // {movieDetails.genres
                                        // ? getGenreNames(movieDetails.genres)
                                        // : console.log("Loading genres...")}
                                </span>

                                <span className="year">
                                    {new Date(
                                        movieDetails.release_date
                                    ).getFullYear()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default MovieDetails;
