import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import UserProvider from "./context/UserContext";
import AuthProvider from "./context/AuthContext";
import ModalProvider from "./context/ModalContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UserProvider>
  </AuthProvider>
);
