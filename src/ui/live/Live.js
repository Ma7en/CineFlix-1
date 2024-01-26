import axios from "axios";
import React, { useEffect, useState } from "react";

import HBOLogoSquare from "../../images/HBO-Logo-square.jpg";
import { apiKey, apiLink, imagePath } from "../../utils/constants";
import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

const Live = () => {
    const [liveShows, setLiveShows] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLiveTvShows = async () => {
            try {
                const response = await axios.get(
                    `${apiLink}tv/on_the_air?api_key=${apiKey}`
                );
                // console.log(response.data);
                setLiveShows(response.data.results);
            } catch (error) {
                setError(true);
                console.error("Error fetching TV shows:", error);
            }
        };

        fetchLiveTvShows();
    }, []);

    if (!liveShows) return <Spinner />;
    if (error) return <Empty resourceName="Live Tv Shows" classN="live" />;

    return (
        <>
            <section className="live" id="live">
                <div className="container">
                    <h2 className="section-heading">Live Tv Shows</h2>
                    <div className="cards">
                        {liveShows.map((show) => (
                            <div className="card" key={show.id}>
                                <div className="card-head">
                                    <img
                                        src={`${imagePath}${show.poster_path}`}
                                        alt={show.name}
                                        className="card-img"
                                    />
                                    <div className="live-badge">LIVE</div>
                                    <div className="total-viewers">
                                        {show.vote_count}K viewers
                                    </div>
                                    <div className="play">
                                        <ion-icon name="play-circle-outline" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <img
                                        src={HBOLogoSquare}
                                        alt={HBOLogoSquare}
                                        className="avatar HBO "
                                    />
                                    <h3 className="card-title">{show.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Live;
