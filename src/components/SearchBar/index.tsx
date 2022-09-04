import styles from "./SearchBar.module.css"

function SaearchBar() {
  return (
    <div className={styles.container}>
        <input className={styles.input} type="search" name="search" id="search" aria-label='search notes'/>
    </div>
  )
}

export default SaearchBar