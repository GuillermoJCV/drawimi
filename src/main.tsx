import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "@/components/chakra-ui/provider";
import App from "./App";
import FirebaseProvider from "@/components/context/firebase-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <FirebaseProvider
      <App />
    </Provider>
  </React.StrictMode>,
);
