import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import UserProvider from "./context/UserContext";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthProvider>
);
