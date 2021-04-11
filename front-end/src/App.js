import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './Component/nav-bar';
import Routes from './routes/routes';
import PrivateRoutes from './routes/private-routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes />
          <PrivateRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
