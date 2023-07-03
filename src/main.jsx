import React from "react";
import ReactDOM from "react-dom/client";
import{ App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Providers/UserContext/UserContext.jsx";
import { TechProvider } from "./Providers/TechContext/TechContext.jsx";
import { ProfileProvider } from "./Providers/TechContext/TechContextProfile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <ProfileProvider>
            <App />
          </ProfileProvider>
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
