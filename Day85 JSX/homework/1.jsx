import { useState, useEffect } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [library, setLibrary] = useState([]);
    useEffect(() => {
        const stored = localStorage.getItem("library");
        if (stored) {
        setLibrary(JSON.parse(stored));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("library", JSON.stringify(library));
    }, [library]);
    const searchBooks = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();
        setBooks(data.items || []);
    };
    const addToLibrary = (book) => {
        const newBook = {
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors?.join(", "),
            image: book.volumeInfo.imageLinks?.thumbnail,
            description: book.volumeInfo.description,
            status: "unread"
        };
        if (!library.find((b) => b.id === newBook.id)) {
        setLibrary([...library, newBook]);
        }
    };
    const toggleStatus = (id) => {
        const updated = library.map((book) =>
        book.id === id
            ? {
                ...book,
                status: book.status === "read" ? "unread" : "read"
            }
            : book
        );
        setLibrary(updated);
    };
    return (
        <div style={{ padding: "20px" }}>
        <h1>📚 Book Library App</h1>
        <form onSubmit={searchBooks}>
            <input
            type="text"
            placeholder="Search books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        <hr />
        <h2>Search Results</h2>
        {books.map((book) => (
            <div key={book.id} style={{ marginBottom: "20px" }}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            )}
            <p>
                {book.volumeInfo.description?.slice(0, 100)}...
            </p>
            <button onClick={() => addToLibrary(book)}>
                Add to Library
            </button>
            </div>
        ))}
        <hr />
        <h2>My Library</h2>
        {library.map((book) => (
            <div key={book.id} style={{ marginBottom: "20px" }}>
            <h3>{book.title}</h3>
            <p>{book.authors}</p>
            {book.image && <img src={book.image} alt="" />}
            <p>{book.description?.slice(0, 100)}...</p>
            <p>Status: {book.status}</p>
            <button onClick={() => toggleStatus(book.id)}>
                Toggle Status
            </button>
            </div>
        ))}
        </div>
    );
}

export default App;