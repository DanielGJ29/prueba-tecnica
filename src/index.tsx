import React from "react";
import ReactDOM from "react-dom/client";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
