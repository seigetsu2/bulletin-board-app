import { TextBox } from "../../components/TextBox/TextBox";
import { Button } from "../../components/Button/Button";
import styles from "./CreateThreadPage.module.css";
import { useState } from "react";

type Props = {
  refreshThreadList: () => void;
};

export const CreateThreadPage: React.FC<Props> = ({ refreshThreadList }) => {
  const [title, setTitle] = useState("");
  async function postCreateNewThread(threadName: string) {
    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: threadName }),
      }
    );
  }
  async function handleClick() {
    if (!title) return;
    await postCreateNewThread(title);
    setTitle("");
    refreshThreadList();
  }
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>スレッド新規作成</div>
        <div className={styles.textBox}>
          <TextBox
            placeholder="スレッドタイトル"
            onTextChange={(text) => setTitle(text)}
            value={title}
          />
        </div>
        <a className={styles.top} href="/">
          Topに戻る
        </a>
        <div className={styles.create}>
          <Button text="作成" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
