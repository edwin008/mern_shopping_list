import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.jsx'
// import ShoppingList from './components/ShoppingList';
// import ItemModal from './components/ItemModal';
// import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes/Routes';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      // <Provider store={store}>
      <div className='App'>
        <AppNavbar />
        {/* <Container>
            <ItemModal />
            <ShoppingList />
          </Container> */}
        <Routes />
      </div>
      // </Provider>
    );
  }
}

export default App;
