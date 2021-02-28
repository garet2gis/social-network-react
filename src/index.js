import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {createGlobalStyle, ThemeProvider} from "styled-components";


const Global = createGlobalStyle`
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
        html {
            font-family: sans-serif;
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
        }
`


const theme = {
    media:{
        phone: "(max-width: 900px)"
    }
}

export let renderEntireTree = () => {
    ReactDOM.render(
        <ThemeProvider theme = {theme}>
            <Global/>
            <App/>
        </ThemeProvider>,
        document.getElementById('root'));
}

renderEntireTree();

store.subscribe(renderEntireTree);

reportWebVitals();
