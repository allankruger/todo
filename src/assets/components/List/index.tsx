import styles from "./styles.module.css";
import { Clipboard } from "phosphor-react";
import { ListItem } from "../ListItem";
import { useState } from "react";

export function List() {
  const [isListEmpty, setIsListEmpty] = useState(false);

  return isListEmpty ? (
    <section className={styles.taskList}>
      <div className={styles.taskListBody}>
        <Clipboard size={56} />
        <strong>You don't have any tasks registered</strong>
        <p>Create tasks and organize your to do items</p>
      </div>
    </section>
  ) : (
    <>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </>
  );
}
