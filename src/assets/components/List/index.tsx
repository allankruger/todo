import styles from "./styles.module.css";
import { Clipboard } from "phosphor-react";
import { ListItem } from "../ListItem";

export function List() {
  return (
    <section className={styles.taskList}>
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

      <div className={styles.taskListBody}>
        <Clipboard size={56} />
        <strong>You don't have any tasks registered</strong>
        <p>Create tasks and organize your to do items</p>
      </div>

      <ListItem />
    </section>
  );
}
