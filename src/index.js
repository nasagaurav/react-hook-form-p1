import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function reducer(state = { a: [] }, action) {
  switch (action.type) {
    case 'add':
      return state;
    case 'delete':
      return state;
    default:
      return state;
  }
}

function Redux() {
  return (
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  );
}

root.render(
  <StrictMode>
    <Redux />
  </StrictMode>
);
