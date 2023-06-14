import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ExampleCounter_1, Mouse } from './components/Counter';
import { ExampleCounter_2 } from './components/Counter';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ExampleCounter_1/>
    <ExampleCounter_2/> */}
    <Mouse/>
  </React.StrictMode>,
  document.getElementById('root')
);
