import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import ListView from './Products/List';
import DetailView from './Products/Detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/products" component={ListView} />
          <Route path="/products/:id" component={DetailView} />
          <Route render={() => <Redirect to="/products" />} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
