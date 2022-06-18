import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

// ReactDOM.render(
//     <Provider store={store}>
//       <ThemeProvider theme={customTheme}>
//         <App />
//       </ThemeProvider>
//     </Provider>,
//   document.getElementById("root") || document.createElement("div")
// );

//
//
// import { ThemeProvider } from "@material-ui/styles";
// import { createTheme } from "@material-ui/core/styles";

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#363062",
//     },
//     background: {
//       default: "#363062",
//     },
//     text: {
//       primary: "#E9D5CA",
//     },
//   },
// });
