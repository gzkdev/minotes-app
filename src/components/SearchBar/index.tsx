import styles from "./SearchBar.module.css"
import {VscSearch} from "react-icons/vsc"

function SearchBar() {
  return (
    <div className={styles.search__box}>
        <input className={styles.search__input} type="search" placeholder="Search notes" name="search" id="search" aria-label='search notes'/>
        <div className={styles.icon__box}><VscSearch aria-label="search icon"/></div>
    </div>
  )
}

export default SearchBar