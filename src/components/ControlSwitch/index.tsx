import { useSelector,useDispatch } from "react-redux";
import styles from "./ControlSwitch.module.css";
import { toggleControl } from "../../store/ControlSlice";
import { RootState } from "../../store";

function ControlSwitch() {
  const dispatch = useDispatch();
  const controlState = useSelector((state: RootState) => state.control.control);
  
  return (
    <div className={styles.control__switch} data-mode={controlState}>
      <button className={styles.control__btn} onClick={()=>dispatch(toggleControl())}>Notes</button>
      <button className={styles.control__btn} onClick={()=>dispatch(toggleControl())}>Lists</button>
    </div>
  );
}

export default ControlSwitch;
