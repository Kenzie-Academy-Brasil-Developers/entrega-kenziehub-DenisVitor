import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LogProvider } from "./Providers/UserContext/context.jsx";
import { DashboardProvider } from "./Providers/TechContext/dashboardContext.jsx";
import { ProfileProvider } from "./Providers/TechContext/profileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LogProvider>
        <DashboardProvider>
          <ProfileProvider>
            <App />
          </ProfileProvider>
        </DashboardProvider>
      </LogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
