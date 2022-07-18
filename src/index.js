import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import {StateProvider} from "./StateProvider";



const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
    <App /> 
    </StateProvider>
  </StrictMode>

);


reportWebVitals();
