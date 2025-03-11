import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

function Navbar({ onSearch }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass search term to Home.tsx
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brahma Jijnasa
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-light" type="button">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
