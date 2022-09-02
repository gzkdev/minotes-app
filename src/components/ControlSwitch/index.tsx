import { VscNotebook, VscListUnordered } from "react-icons/vsc";
import styles from "./control-switch.module.css";

function ControlSwitch() {
  return (
    <div className={styles.control__switch}>
      <button className={styles.control__btn}>
        <VscNotebook />
      </button>
      <button className={styles.control__btn}>
        <VscListUnordered />
      </button>
    </div>
  );
}

export default ControlSwitch;
