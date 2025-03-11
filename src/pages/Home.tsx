import { Link } from "react-router-dom";
import { useState } from "react";
import { questions } from "./Questions";
import Navbar from "../components/Navbar";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(questions.map(q => q.category))];

  // Filter questions based on search term and selected category
  const filteredQuestions = questions.filter(q =>
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || q.category === selectedCategory)
  );

  return (
    <div>
            
      {/* Pass search function to Navbar */}
      <Navbar onSearch={setSearchTerm} />

      <div className="container mt-4">
        <h1 className="text-center mb-3">Browse Questions</h1>

        {/* Filter Section */}
        <div className="d-flex justify-content-center mb-3">
          <select
            className="form-select w-50"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Questions List */}
        <div className="row">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <div key={q.id} className="col-md-6 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/question/${q.id}`} className="text-decoration-none">
                        {q.title}
                      </Link>
                    </h5>
                    <span className="badge bg-secondary">{q.category}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No questions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
