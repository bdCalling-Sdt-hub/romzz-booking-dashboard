import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Provider/UserProvider.jsx";  
import { Provider } from "react-redux";
import {store} from "../src/redux/store.jsx" 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
     <Provider store={store} > 
    <UserProvider>   
    <App />
    </UserProvider>  
    </Provider>
  </React.StrictMode>
);
