import { useState, useEffect } from "react";
import { Thread } from "../types/Thread";

export const useThreadList: () => [Thread[], () => Promise<void>] = () => {
  const [threadList, setThreadList] = useState<Thread[]>([]);
  async function refreshThreadList() {
    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads"
    );
    const threads: Thread[] = await response.json();
    setThreadList(threads);
  }
  useEffect(() => {
    refreshThreadList();
  }, []);
  return [threadList, refreshThreadList];
};
