// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import store from "./store/store";
// import "./index.css"; // Adjust based on your styling setup


// console.log("Starting React App..."); // Debug log

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

console.log("main.jsx: Starting React app...");

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("main.jsx: Root element found, mounting React app...");
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
} else {
  console.error("main.jsx: Root element not found!");
}

