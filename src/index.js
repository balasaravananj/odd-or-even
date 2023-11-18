import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


const store = configureStore({
   reducer : rootReducer
});

store.subscribe(()=>{
   return console.log('State', store.getState());
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App> </App>
);

