import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
}

export default App;
