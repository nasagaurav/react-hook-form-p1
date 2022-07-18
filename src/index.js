import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import App from './App'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function reducer (state = {a: [ ]},action)
switch(action.type)
    {  
           case "insert":return state;
           case "delete":return state;
             default return :state;

    }


function Redux()
{
   return <Provider store = {createStore(reducer)}>
   <App/>
   <ToastContainer />
   </Provider>

}

root.render(
  <StrictMode>
  
    <Redux/>
  </StrictMode>
);
