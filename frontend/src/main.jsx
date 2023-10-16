import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import reduxStore, {persistor} from "./reduxStore.js";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>


)