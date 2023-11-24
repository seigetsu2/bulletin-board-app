import { useNavigate } from "react-router-dom";
import { ThreadList } from "../../components/ThreadList/ThreadList";
import { useThreadList } from "../../hooks/useThreadList";
import { Thread } from "../../types/Thread";
import styles from "./ThreadListPage.module.css";
export const ThreadListPage: React.FC<Props> = ({ threadList }) => {
  const navigate = useNavigate();
  const navToPostList = (threadId: string, threadTitle: string) => {
    navigate("/thread/" + threadId, { state: threadTitle });
  };
  return (
    <div className={styles.page}>
      <div className={styles.title}>新着スレッド</div>
      <div>
        <ThreadList threadList={threadList} navToPostListPage={navToPostList} />
      </div>
    </div>
  );
};
type Props = {
  threadList: Thread[];
};
