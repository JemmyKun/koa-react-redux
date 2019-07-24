import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import {HashRouter,hashHistory} from "react-router-dom";

ReactDom.render(
    <Provider store={store}>
        <HashRouter history={hashHistory}><App/></HashRouter>
    </Provider>,
    document.getElementById("root")
);