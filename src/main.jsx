import React from "react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
