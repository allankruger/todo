import "./global.css";
import styles from "./App.module.css";
import Logo from "./assets/todologo.svg";

export function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
      </header>
      <div className={styles.searchBar}>
        <input type="text" />
        <button>Create</button>
      </div>
    </div>
  );
}
