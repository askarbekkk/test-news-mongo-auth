import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import {Provider} from "react-redux";
import {store} from "./redux";
import './index.css';
import './assets/styles/main.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
       <Routes />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

