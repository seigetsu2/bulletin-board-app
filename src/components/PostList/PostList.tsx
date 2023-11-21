import { Post } from "../../types/Post";
import styles from "./PostList.module.css";

export const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <div>
      <ul className={styles.list}>
        {postList.map((tx) => (
          <li key={tx.id} className={styles.item}>
            {tx.post}
          </li>
        ))}
      </ul>
    </div>
  );
};
type Props = {
  postList: Post[];
};
