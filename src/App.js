import React, { Fragment } from 'react';
import Header from './components/common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  Detail
} from "./components/pages";


function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/detail' exact component={Detail} />
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
