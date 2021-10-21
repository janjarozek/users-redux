import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';

import Header from './components/Header';
import Menu from './components/Menu/containers/Menu';

import Home from './pages/Home'
import UsersPage from './pages/UsersPage'
import Contact from './pages/Contact'

const middleware = [thunk];
// let store = createStore(persistedReducer)
const store = createStore(rootReducer, applyMiddleware(...middleware) );
store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
