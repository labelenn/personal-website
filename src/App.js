import './App.css';
import Home from './pages/Home';
import Yes from './pages/Yes';
import No from './pages/No';

function App() {
  let Component
  switch (window.location.pathname) {
    case '/':
      Component = Home;
      break;

    case '/yes':
      Component = Yes;
      break;

    case '/no':
      Component = No;
      break;

    default:
      Component = Home;
      break;
  }

  return (
    <div>
      <Component />
    </div>
  );
}

export default App;
