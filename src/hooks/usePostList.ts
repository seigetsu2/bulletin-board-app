import { useState, useEffect } from "react";
import { Post } from "../types/Post";
import { PostList } from "../types/PostList";

export const usePostList = (
  threadId: string | undefined
): [Post[], () => Promise<void>] => {
  const [postList, setPostList] = useState<Post[]>([]);
  async function refreshPostList() {
    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads/" +
        threadId +
        "/posts"
    );
    const res: PostList = await response.json();
    setPostList(res.posts);
  }
  useEffect(() => {
    refreshPostList();
  }, []);
  return [postList, refreshPostList];
};
