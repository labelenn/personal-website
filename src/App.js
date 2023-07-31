import './App.css';
import Home from './pages/Home';
import Yes from './pages/Yes';
import No from './pages/No';
import {Route, Switch} from 'react-router-dom';

function App() {
  // let Component
  // switch (window.location.pathname) {
  //   case '/':
  //     Component = Home;
  //     break;

  //   case '/yes':
  //     Component = Yes;
  //     break;

  //   case '/no':
  //     Component = No;
  //     break;

  //   default:
  //     Component = Home;
  //     break;
  // }

  return (
    
    <Switch>
      <Route exact path = "/">
      <Home />
      </Route>
      <Route path = "/personal-website/yes">
      <Yes />
      </Route>
      <Route path = "/personal-website/no">
      <No />
      </Route>
    </Switch>
  );
}

export default App;
