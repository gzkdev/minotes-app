import { VscEllipsis } from "react-icons/vsc"
import styles from "./NotesContainer.module.css"

function NotesContainer() {
  return (
    <div className={styles.section}>
        <h3 className={styles.heading}>All Notes</h3>
        <div className={styles.container}>
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