import ReactDOM from "react-dom";
import Styles from "./modal.module.css";
import { useContext } from "react";
import { ModalContextApi } from "../../context/ModalContext";
const Modal = ({ children }) => {
  let { toggle, handleToggle } = useContext(ModalContextApi);
  return ReactDOM.createPortal(
    <>
      <section className={Styles.modalContainer}>
        <div className="closeIcon">
          <button onClick={handleToggle}>{toggle ? "X" : "open"}</button>
        </div>
        {toggle ? children : ""}
      </section>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
