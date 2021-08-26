import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/redux';
import {Provider} from 'react-redux';
import FirebaseComponent from './pages/Firebase'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
