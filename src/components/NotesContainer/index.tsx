import { useState } from "react"
import { VscEllipsis } from "react-icons/vsc"
import styles from "./NotesContainer.module.css"

function NotesContainer() {
    const [showActions, setShowActions] = useState(false);
  return (
    <div className={styles.section}>
        <div className={styles.heading}>All Notes</div>
        <div className={styles.container}>
            <div className={styles.note} data-show-actions={showActions}>
                <div className={styles.note__header}>
                    <div className={styles.note__title}>My First Note</div>
                    <button className={styles.note__btn} onClick={() => setShowActions(!showActions)}><VscEllipsis/></button>
                    <div onClick={() => setShowActions(!showActions)} className={styles.note__actions}>
                        <button>Add to Favorites</button>
                        <button>Delete Note</button>
                    </div>
                </div>
                <div className={styles.note__body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae aliquid explicabo incidunt neque architecto corporis atque voluptas.</div>
            </div>

            <div className={styles.note}>
                <div className={styles.note__header}>
                    <div className={styles.note__title}>My First Note</div>
                    <button className={styles.note__btn}><VscEllipsis/></button>
                </div>
                <div className={styles.note__body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae aliquid explicabo incidunt neque architecto corporis atque voluptas.</div>
            </div>

            <div className={styles.note}>
                <div className={styles.note__header}>
                    <div className={styles.note__title}>My First Note</div>
                    <button className={styles.note__btn}><VscEllipsis/></button>
                </div>
                <div className={styles.note__body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae aliquid explicabo incidunt neque architecto corporis atque voluptas.</div>
            </div>

            <div className={styles.note}>
                <div className={styles.note__header}>
                    <div className={styles.note__title}>My First Note</div>
                    <button className={styles.note__btn}><VscEllipsis/></button>
                </div>
                <div className={styles.note__body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae aliquid explicabo incidunt neque architecto corporis atque voluptas.</div>
            </div>
        </div>
    </div>
  )
}

export default NotesContainer