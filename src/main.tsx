import { MantineProvider } from "@mantine/styles";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        // theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
