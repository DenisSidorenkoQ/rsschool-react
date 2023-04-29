import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import React from "react";

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
