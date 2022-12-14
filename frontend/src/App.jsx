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

function App() {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <Dropdown />
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/SEPractices">Select the Practice</NavLink></li>
          <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
          <li><NavLink to="/ModerateArticle">Moderate Articles</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/SEPractices" component={SEPractice} />
          <Route path="/SubmitArticle" component={SubmitArticle} />
          <Route path="/ModerateArticle" component={ModerateArticle} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </div>
      </div>
    </Router>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
