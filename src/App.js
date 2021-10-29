import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

import Header from './components/Header';
import Menu from './components/Menu/containers/Menu';

import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import Info from './pages/InfoPage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
// let store = createStore(persistedReducer)
// const store = createStore(rootReducer, applyMiddleware(...middleware));
// const store = createStore(rootReducer, applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));
// store.subscribe(()=> console.log(store.getState())));

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/contact">
            <Info />
          </Route>
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
