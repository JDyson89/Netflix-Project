import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from './components/Movies/Movies.component'
import SingleMovie from './components/SingleMovie/SingleMovie.component'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/singleMovie/:id' component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;