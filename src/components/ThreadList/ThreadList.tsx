import { Thread } from "../../types/Thread";
import styles from "./Thread.module.css";
export const ThreadList: React.FC<Props> = ({
  threadList,
  navToPostListPage,
}) => {
  return (
    <div>
      <ul className={styles.list}>
        {threadList.map((tx) => (
          <li
            key={tx.id}
            className={styles.item}
            onClick={() => navToPostListPage(tx.id, tx.title)}
          >
            {tx.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
type Props = {
  threadList: Thread[];
  navToPostListPage: (threadId: string, threadTitle: string) => void;
};
