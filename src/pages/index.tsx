import { ControlSwitch } from "../components";
import styles from "../styles/HomePage.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main} data-role="main">
        <ControlSwitch />
        <h1>Home Page</h1>
      </div>
      <div className={styles.space} data-role="section"></div>
    </div>
  );
}

export default Home;
