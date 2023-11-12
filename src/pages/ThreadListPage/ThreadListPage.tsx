import { ThreadList } from "../../components/ThreadList/ThreadList";
import { useThreadList } from "../../hooks/useThreadList";
import { Thread } from "../../types/Thread";
import styles from "./ThreadListPage.module.css";
export const ThreadListPage: React.FC<Props> = ({ threadList }) => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>新着スレッド</div>
      <div>
        <ThreadList threadList={threadList} />
      </div>
    </div>
  );
};
type Props = {
  threadList: Thread[];
};
