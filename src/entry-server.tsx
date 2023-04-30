import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

export const render = (url: string, opts?: object) => {
    return renderToPipeableStream(
        <React.StrictMode>
            <Provider store={store}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </Provider>
        </React.StrictMode>,
        opts
    );
};
