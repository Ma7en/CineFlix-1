import axios from "axios";
import React, { useEffect, useState } from "react";

import { apiKey, apiLink, imagePath } from "../../utils/constants";
import Spinner from "../spinner/Spinner";

const Banner = () => {
    const [movieJW, setMovieJW] = useState([]);
    const [error, setError] = useState(null);

    // تحويل الوقت إلى الشكل المطلوب
    const hours = Math.floor(movieJW.runtime / 60) || 4;
    const minutes = movieJW.runtime % 60 || 30;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const searchResponse = await axios.get(
                    `${apiLink}search/movie?api_key=${apiKey}&query=John%20Wick`
                );

                if (
                    searchResponse.data.results &&
                    searchResponse.data.results.length > 0
                ) {
                    const movieId = searchResponse.data.results[0].id;
                    axios
                        .get(`${apiLink}movie/${movieId}?api_key=${apiKey}`)
                        .then((response) => {
                            setMovieJW(response.data);
                        });
                } else {
                    setError("Movie not found.");
                }
            } catch (error) {
                console.error(error);
                // setError(true);
                // setError("An error occurred while fetching movie details.");
            }
        };
        fetchMovieDetails();
    }, []);

    const genresDisplay =
        movieJW && movieJW.genres
            ? movieJW.genres.map((genre) => genre.name).join(" / ")
            : "";

    if (!movieJW) return <Spinner />;
    // if (error) return <Empty resourceName="banner" />;

    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="card">
                        <img
                            src={`${
                                error
                                    ? `${imagePath}${movieJW.poster_path}`
                                    : `./images/banner/John-Wick-3.jpg`
                            }`}
                            className="banner-img"
                            alt={movieJW.title}
                        />

                        <div className="card-content">
                            <div className="card-info">
                                <div className="genre">
                                    <ion-icon name="film" />
                                    <span>{genresDisplay || "Actions"}</span>
                                </div>
                                <div className="year">
                                    <ion-icon name="calendar" />
                                    <span>
                                        {new Date(
                                            movieJW.release_date
                                        ).getFullYear() || 2020}
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
                            <h2 className="card-title">{movieJW.title}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
