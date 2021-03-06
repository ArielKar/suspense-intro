import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Concurrent Mode
ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />);

// "Regular" Mode
// ReactDOM.render(<App />, document.getElementById("root"));
