import React from 'react';
import Header from './components/common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  Post,
  Login,
} from "./components/pages";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id' exact component={Post} />
        <Route path='/login' exact component={Login} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
