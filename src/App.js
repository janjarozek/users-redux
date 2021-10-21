import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Menu from './components/Menu/containers/Menu';

import Home from './pages/Home'
import UsersPage from './pages/UsersPage'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
