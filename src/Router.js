import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Write from "./pages/Write";
import Article from "./pages/Article";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/article/:id" element={<Article />} />
        </Routes>
    );
};

export default Router;
