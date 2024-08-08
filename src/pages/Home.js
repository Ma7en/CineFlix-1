import React from "react";
import Banner from "../ui/banner/Banner";
import Movies from "../ui/movies/Movies";
import Category from "../ui/category/Category";
import Live from "../ui/live/Live";
import Links from "../ui/links/Links";

const Home = () => {
    return (
        <>
            <main>
                <Banner />
                <Movies />
                <Category />
                <Live />
                <Links />
            </main>
        </>
    );
};

export default Home;
