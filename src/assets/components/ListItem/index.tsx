import styles from "./styles.module.css";
import { Trash } from "phosphor-react";

export function ListItem() {
  return (
    <div className={styles.listItemContainer}>
      <label>
        <input type="checkbox" name="listItem" />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.</p>
      </label>
      <Trash size={18} />
    </div>
  );
}
