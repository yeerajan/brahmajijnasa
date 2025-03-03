import { useParams } from 'react-router-dom';
import { questions } from './Questions';  // Import questions

function QuestionPage() {
  const { id } = useParams();
  const question = questions.find(q => q.id === id);  // Find the matching question

  if (!question) {
    return <h1>Question not found</h1>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.answer}</p>
    </div>
  );
}

export default QuestionPage;
