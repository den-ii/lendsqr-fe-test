import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { LoginContextProvider } from "./context/LoginContext";
import { UsersContextProvider } from "./context/UsersContext";
import { FilteringContextProvider } from "./context/FilteringContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoginContextProvider>
      <UsersContextProvider>
        <FilteringContextProvider>
          <App />
        </FilteringContextProvider>
      </UsersContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
