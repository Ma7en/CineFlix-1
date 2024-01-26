import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./ui/movies/MovieDetails";
import Editing from "./pages/editing";
import PageNotFound from "./pages/PageNotFound";
import RestPassword from "./pages/RestPassword";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/movieDetails/:id" element={<MovieDetails />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="editing" element={<Editing />} />

                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="restpassword" element={<RestPassword />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            <SpeedInsights />
        </div>
    );
}

export default App;
