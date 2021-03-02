import './App.css';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
