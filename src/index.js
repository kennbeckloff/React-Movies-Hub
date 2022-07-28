import React from 'react';
import './css/index.css';
import ReactDom from 'react-dom'
import App from './App';
import MoviesContextProvider from './context/MoviesContext.js'

ReactDom.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>
)


