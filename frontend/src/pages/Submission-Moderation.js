import ApprovalForm from '../components/SubmissionForm';
import '../App.css';

function ModerateArticle() {
  return (
    <div>
      <h2>Moderate Article</h2>
      <p>
        Submitted articles pending review.
      </p>
      <ApprovalForm />
    </div>
  );
}

export default ModerateArticle;
