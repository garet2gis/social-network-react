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
            font-family: 'Segoe UI','Roboto',sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
        }

`


const theme = {
    colorPalettes:{
        second:{
            body:"#ced7d8",
            header:"#f47a60",
            nav:"#7fe7dc",
            other:"#316879"
        },
        first:{
            body:"#e0cdbe",
            other:"#a9c0a6",
            nav: "#edca82",
            header:"#097770",
        }
    },
    media:{
        phone: "(max-width: 660px)",
        tablet: "(max-width: 900px) and (min-width:660px)"
    },
    borderRadius:"5px"
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
