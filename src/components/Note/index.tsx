import { useState } from "react";
import { VscEllipsis } from "react-icons/vsc";
import styles from "./Note.module.css";

function Note() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  function hideTooltip() {
    setIsTooltipOpen(false);
  }

  function showTooltip() {
    setIsTooltipOpen(true);
  }

  return (
    <div className={styles.note} data-show-actions={isTooltipOpen}>
      <div className={styles.note__header}>
        <div className={styles.note__title}>My First Note</div>
        <button
          className={styles.note__btn}
          onFocus={showTooltip}
          onBlur={hideTooltip}
        >
          <VscEllipsis aria-label="toggle tooltip" />
        </button>
        <div className={styles.note__tooltip}>
          <button>Add to Favorites</button>
          <button>Delete Note</button>
        </div>
      </div>
      <div className={styles.note__body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae
        aliquid explicabo incidunt neque architecto corporis atque voluptas.
      </div>
    </div>
  );
}

export default Note;
