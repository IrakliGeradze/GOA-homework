//main jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


//app jsx

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}

export default function App() {
    return (
        <div style={{ padding: "20px" }}>
        <nav style={{ display: "flex", gap: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
    );
}