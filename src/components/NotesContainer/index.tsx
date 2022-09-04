import Note from "../Note"
import styles from "./NotesContainer.module.css"

function NotesContainer() {
  return (
    <div className={styles.section}>
        <div className={styles.heading}>All Notes</div>
        <div className={styles.container}>
            <Note/>
            <Note/>
        </div>
    </div>
  )
}

export default NotesContainer