import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ExampleCounter_1, Mouse } from './components/Counter';
import { ExampleCounter_2 } from './components/Counter';
import Content from './components/UseEffect';
import UseRef from './components/Demo';


// ReactDOM.createRoot(document.getElementById('root')).render(
//    <React.StrictMode>
//     <App />
//     <Mouse/>
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        {/* <App /> */}
        <Mouse/>
        <div style={{ display:'flex', justifyContent:'space-between', }}>
            <Content/>
            <UseRef/>
        </div>
    </React.StrictMode>,
)
