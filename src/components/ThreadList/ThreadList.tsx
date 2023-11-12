import { Thread } from "../../types/Thread";
import styles from "./Thread.module.css";
export const ThreadList: React.FC<Props> = ({ threadList }) => {
  return (
    <div>
      <ul className={styles.list}>
        {threadList.map((tx) => (
          <li key={tx.id} className={styles.item}>
            {tx.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
type Props = {
  threadList: Thread[];
};
