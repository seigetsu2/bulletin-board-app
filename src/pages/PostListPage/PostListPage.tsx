import { PostList } from "../../components/PostList/PostList";
import { usePostList } from "../../hooks/usePostList";
import { useLocation, useParams } from "react-router-dom";
import { TextBox } from "../../components/TextBox/TextBox";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
export const PostListPage = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [postList, refreshPostList] = usePostList(threadId);
  const [newPost, setNewPost] = useState("");
  const location = useLocation();
  const title = location.state as string;
  async function postCreateNewPost(post: string) {
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
    <div>
      <div>{title}</div>
      <div>
        <PostList postList={postList} />
      </div>
      <TextBox
        placeholder="投稿しよう!"
        onTextChange={(text) => setNewPost(text)}
        value={newPost}
      />
      <Button text="投稿" onClick={() => postCreateNewPost(newPost)} />
    </div>
  );
};
