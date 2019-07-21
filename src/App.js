import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListView from './components/Products';
import DetailView from './components/ProductDetail';
import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/products" component={ListView} />
            <Route path="/products/:id" component={DetailView} />
            <Route render={() => <Redirect to="/products" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
