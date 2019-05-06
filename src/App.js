import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Container from './components/Container';
import './components/styles.css';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
