import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <>
        <App />
        <ToastContainer />
      </>
    </StrictMode>
  );
}
