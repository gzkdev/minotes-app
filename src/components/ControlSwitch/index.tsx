import styles from "./control-switch.module.css";

function ControlSwitch() {
  return (
    <div className={styles.control__switch} data-mode="notes">
      <button className={styles.control__btn}>Notes</button>
      <button className={styles.control__btn}>Lists</button>
    </div>
  );
}

export default ControlSwitch;
