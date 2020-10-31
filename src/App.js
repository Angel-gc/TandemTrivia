import LandingPage from './Components/LandingPage';
import GameScreen from './Components/GameScreen'
import NotFoundPage from './Components/NotFoundPage'
import {Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/trivia' component={GameScreen} />
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
