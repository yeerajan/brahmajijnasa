import { useParams } from 'react-router-dom';

function QuestionPage() {
  const {id} = useParams();

  return (
    <div>
      <h1> Question {id} </h1>
      <p>This is answer to question {id}</p>
    </div>
  );
}
export default QuestionPage;