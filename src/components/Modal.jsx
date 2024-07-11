import styles from "./Modal.module.css";
function Modal(props) {
  return (
    <>
      <div className={styles.backdrop}></div>
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
