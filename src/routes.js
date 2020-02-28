import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Create from './pages/Create';

import Global from './styles/global';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
      </Switch>

      <Global />
      <ToastContainer autoClose={5000} />
    </BrowserRouter>
  );
}
