import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";


export let renderEntireTree = () => {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

renderEntireTree();

store.subscribe(renderEntireTree);

reportWebVitals();
