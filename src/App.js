import './App.css';
import Home from './pages/Home';
import Yes from './pages/Yes';
import No from './pages/No';
import Movie1 from './pages/Movie1';
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3';
import Movie4 from './pages/Movie4';
import Confirm from './pages/Confirm';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    
    <Switch>
      <Route exact path = "/"><Home /></Route>
      <Route path = "/personal-website/yes"><Yes /></Route>
      <Route path = "/personal-website/no"><No /></Route>
      <Route path = "/personal-website/movie1"><Movie1 /></Route>
      <Route path = "/personal-website/movie2"><Movie2 /></Route>
      <Route path = "/personal-website/movie3"><Movie3 /></Route>
      <Route path = "/personal-website/movie4"><Movie4 /></Route>
      <Route path = "/personal-website/confirm"><Confirm /></Route>
    </Switch>
  );
}

export default App;
