import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LogProvider } from "./Providers/context";
import { DashboardProvider } from "./Providers/dashboardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogProvider>
        <DashboardProvider>
          <App />
        </DashboardProvider>
      </LogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
