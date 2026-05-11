import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}



import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./Product";

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
        <Link to="/product/1">Product 1</Link>
        <Link to="/product/2">Product 2</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}