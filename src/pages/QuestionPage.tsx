import { useParams, Link } from 'react-router-dom';
import { questions } from './Questions';  
import ReactMarkdown from 'react-markdown';
import { Container, Card } from 'react-bootstrap';

function QuestionPage() {
  const { id } = useParams();
  const question = questions.find(q => q.id === id);

  if (!question) {
    return (
      <Container className="mt-5 text-center">
        <h1 className="text-danger">Question not found</h1>
        <Link to="/" className="btn btn-primary mt-3">Go Back</Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4">
        <Card.Body>
          <h1 className="text-primary mb-4">{question.title}</h1>
          <div className="formatted-text">
            <ReactMarkdown>{question.answer}</ReactMarkdown>
          </div>
          <Link to="/" className="btn btn-secondary mt-3">Back to Questions</Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default QuestionPage;
