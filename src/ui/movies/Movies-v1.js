/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey, apiLink, imagePath } from "../../utils/constants";
import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

const Movies = () => {
    // const [pageNumber, setPageNumber] = useState(1);
    const [allMovies, setallMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null);

    const [selectedGenre, setSelectedGenre] = useState("all genres");
    const [selectedYear, setSelectedYear] = useState("all years");
    const [selectedFilter, setSelectedFilter] = useState("featured");

    // تحويل الوقت إلى الشكل المطلوب
    // const hours = Math.floor(movieJW.runtime / 60);
    // const minutes = movieJW.runtime % 60;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `${apiLink}movie/popular?api_key=${apiKey}&page=${currentPage}`
                );
                // قم بتحديث allMovies بناءً على القيم المحددة من الفلاتر
                const filteredMovies = response.data.results.filter((movie) => {
                    const genreMatch =
                        selectedGenre === "all genres" ||
                        movie.genre_ids.includes(Number(selectedGenre));
                    const yearMatch =
                        selectedYear === "all years" ||
                        new Date(movie.release_date)
                            .getFullYear()
                            .toString() === selectedYear;
                    return genreMatch && yearMatch;
                });

                // console.log(response.data);
                setallMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                setError(true);
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [currentPage]);

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

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
        // يمكنك إضافة الكود اللازم لتحديث القائمة بناءً على تغيير النوع
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        // يمكنك إضافة الكود اللازم لتحديث القائمة بناءً على تغيير السنة
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.id);
        // يمكنك إضافة الكود اللازم لتحديث القائمة بناءً على تغيير التصنيف
    };

    if (!allMovies) return <Spinner />;
    if (error) return <Empty resourceName="movies" />;

    return (
        <>
            <section className="movies" id="movies">
                <div className="container">
                    <h2 className="section-heading">Movies</h2>

                    <div className="filter-bar">
                        <div className="filter-dropdowns">
                            <select
                                name="genre"
                                className="genre"
                                value={selectedGenre}
                                onChange={handleGenreChange}
                            >
                                <option value="all genres">All genres</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="animal">Animal</option>
                                <option value="animation">Animation</option>
                                <option value="biography">Biography</option>
                            </select>

                            <select
                                name="year"
                                className="year"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="all years">All the years</option>
                                <option value={2022}>2022</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2010-2019">2010-2019</option>
                                <option value="2000-2009">2000-2009</option>
                                <option value="1980-1999">1980-1999</option>
                            </select>
                        </div>

                        <div className="filter-radios">
                            <input
                                type="radio"
                                name="grade"
                                id="featured"
                                defaultChecked
                            />
                            <label htmlFor="featured">Featured</label>
                            <input type="radio" name="grade" id="popular" />
                            <label htmlFor="popular">Popular</label>
                            <input type="radio" name="grade" id="newest" />
                            <label htmlFor="newest">Newest</label>
                            <div className="checked-radio-bg" />
                        </div>
                    </div>

                    <div className="movies-grid">
                        {allMovies.map((movie) => (
                            <div className="movie-card" key={movie.id}>
                                <div className="card-head">
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt={movie.title}
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
                                            {new Date(
                                                movie.release_date
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button
                            className="pagButton"
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <span>
                            {currentPage} / {totalPages}
                        </span>

                        <button
                            className="pagButton"
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movies;
