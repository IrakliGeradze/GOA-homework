import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default App;


function Navigation() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/search">Search</Link>
        </nav>
    );
}

export default Navigation;


import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setSearchParams({ query: inputValue });
    };

    const query = searchParams.get("query");

    return (
        <div>
        <h1>Search Page</h1>

        <input
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        <p>You searched for: {query}</p>
        </div>
    );
}

export default Search;

// useSearchParams გამოიყენება URL-ის query parameter-ების
// წასაკითხად და შესაცვლელად React Router-ში.

// Query parameter არის URL-ის ნაწილი, რომელიც მოდის ? სიმბოლოს შემდეგ.
// მაგალითად:
// /search?query=phone
// აქ query-ის მნიშვნელობა არის "phone".

// Dynamic param (:id) არის URL-ის ნაწილის ნაწილი.
// მაგალითად:
// /product/5
// აქ id = 5

// განსხვავება:
// Dynamic param გზის (path) ნაწილია.
// Query parameter დამატებითი ინფორმაციაა URL-ში.