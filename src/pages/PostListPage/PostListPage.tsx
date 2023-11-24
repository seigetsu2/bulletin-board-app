import { PostList } from "../../components/PostList/PostList";
import { usePostList } from "../../hooks/usePostList";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import styles from "./PostListPage.module.css";
export const PostListPage = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [postList, refreshPostList] = usePostList(threadId);
  const [newPost, setNewPost] = useState("");
  const location = useLocation();
  const title = location.state as string;
  async function postCreateNewPost(post: string) {
    if (!post) return;
    await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        threadId +
        "/posts",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: post }),
      }
    );
    refreshPostList();
    setNewPost("");
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.postList}>
          <div>
            <PostList postList={postList} />
          </div>
        </div>
        <div className={styles.newPost}>
          <textarea
            className={styles.textBox}
            placeholder="投稿しよう!"
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
          />
          <div className={styles.button}>
            <Button text="投稿" onClick={() => postCreateNewPost(newPost)} />
          </div>
        </div>
      </div>
    </div>
  );
};
