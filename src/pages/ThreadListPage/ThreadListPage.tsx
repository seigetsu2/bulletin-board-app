import { ThreadList } from "../../components/ThreadList/ThreadList";
import { useThreadList } from "../../hooks/useThreadList";
import styles from "./ThreadListPage.module.css";
export const ThreadListPage = () => {
  const [threadList, refreshThreadList] = useThreadList();
  return (
    <div className={styles.page}>
      <div className={styles.title}>新着スレッド</div>
      <div>
        <ThreadList threadList={threadList} />
      </div>
    </div>
  );
};
