import React from 'react';
import './App.css';
import Routes from './Routes'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-modal-hook'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
     <Routes/>
     </ModalProvider>
     </Provider>
  );
}

export default App;




