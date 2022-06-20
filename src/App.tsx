import "./global.css";
import styles from "./App.module.css";
import Logo from "./assets/todologo.svg";
import { PlusCircle, Clipboard } from "phosphor-react";
import { List } from "./assets/components/List";

export function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
      </header>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Add a new task" />
        <button>
          Create <PlusCircle size={18} weight="bold" />
        </button>
      </div>

      <div className={styles.taskListHeader}>
          <div>
            <strong className={styles.createdTasks}>
              Created tasks<span>5</span>
            </strong>
          </div>

          <div>
            <strong className={styles.finishedTasks}>
              Finished<span>5</span>
            </strong>
          </div>
        </div>

      <List />
    </div>
  );
}
