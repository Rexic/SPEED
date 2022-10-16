import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

// import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import Home from './Home';
import SEPractice from './SE-Practices';
import SubmitArticle from './Submit-Article';
import NotFoundPage from './404';
import ModerateArticle from './Submission-Moderation';

class routePaths {
  render() {
    return (

      <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <Dropdown />
        <ul className="header">
          <li><NavLink exact to="/Home">Home</NavLink></li>
          <li><NavLink to="/SEPractices">Select the Practice</NavLink></li>
          <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
          <li><NavLink to="/ModerateArticle">Moderate Articles</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/Home" component={Home} />
          <Route path="/SEPractices" component={SEPractice} />
          <Route path="/SubmitArticle" component={SubmitArticle} />
          <Route path="/ModerateArticle" component={ModerateArticle} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
          <Route exact path="/" component={Home}>
            <Redirect to="/Home" />
          </Route>
        </div>
      </div>
    </Router>);
  }
}

export default routePaths;
