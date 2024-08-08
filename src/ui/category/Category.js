import React, { useEffect, useState } from "react";
import axios from "axios";

import { apiKey, apiLink, imagePath } from "../../utils/constants";
import Empty from "../error/Empty";
import Spinner from "../spinner/Spinner";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const genresResponse = await axios.get(
                    `${apiLink}genre/movie/list?api_key=${apiKey}`
                );

                const genres = genresResponse.data.genres;

                for (let genre of genres) {
                    const moviesResponse = await axios.get(
                        `${apiLink}discover/movie?api_key=${apiKey}&with_genres=${genre.id}`
                    );
                    genre.firstMovieImage =
                        moviesResponse.data.results[0].poster_path;
                    genre.moviesCount = moviesResponse.data.total_results;
                }
                setCategories(genres);
            } catch (error) {
                setError(true);
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    if (!categories) return <Spinner />;
    if (error) return <Empty resourceName="category" />;

    return (
        <>
            <section className="category" id="category">
                <div className="container">
                    <h2 className="section-heading">Category</h2>

                    <div className="cards">
                        {categories.map((category) => (
                            <div className="card" key={category.id}>
                                <img
                                    src={`${imagePath}${category.firstMovieImage}`}
                                    alt={category.name}
                                    className="img"
                                />
                                <div className="name">{category.name}</div>
                                <div className="total">
                                    {category.moviesCount}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;
