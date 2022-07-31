import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function reducer(state = { a: [] }, action) {
  console.log('reducer()', action);
  switch (action.type) {
    case 'insert':
      return { ...state, a: [...state.a, action.payload] };
    case 'delete':
      return { ...state, a: action.payload };
    default:
      return state;
  }
}

function Redux() {
  return (
    <Provider store={createStore(reducer)}>
      <App />
      <ToastContainer />
    </Provider>
  );
}

root.render(
  <StrictMode>
    <Redux />
  </StrictMode>
);
