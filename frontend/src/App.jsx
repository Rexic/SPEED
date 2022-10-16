import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

// import ReactDOM from 'react-dom';
import Dropdown from './pages/Dropdown';
import Home from './pages/Home';
import SEPractice from './pages/SE-Practices';
import SubmitArticle from './pages/Submit-Article';
import NotFoundPage from './pages/404';
import ModerateArticle from './pages/Submission-Moderation';
import routePaths from './pages/routePaths'

function App() {
  return (
    routePaths()
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
