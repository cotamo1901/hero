import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
