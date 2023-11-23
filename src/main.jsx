import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import UserProvider from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
