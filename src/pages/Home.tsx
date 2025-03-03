import { Link } from 'react-router-dom';
import { useState } from 'react';
import { questions } from './Questions';
import Navbar from '../components/Navbar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter questions based on search term
  const filteredQuestions = questions.filter(q =>
    q.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Pass search function to Navbar */}
      <Navbar onSearch={setSearchTerm} />

      <div className="container mt-5">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
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
