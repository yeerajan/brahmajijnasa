import { Link } from 'react-router-dom';
import { questions } from './Questions';  // Import questions

function Home() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <ol>
        {questions.map((q) => (
          <li key={q.id}>
            <Link to={`/question/${q.id}`} className="no-underline">
              {q.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
