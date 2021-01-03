import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Login } from './pages';
import { Header } from './components';

function App () {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
