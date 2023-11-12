import { TextBox } from "../../components/TextBox/TextBox";
import { Button } from "../../components/Button/Button";
import styles from "./CreateThreadPage.module.css";

export const CreateThreadPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>スレッド新規作成</div>
        <div className={styles.textBox}>
          <TextBox placeholder="スレッドタイトル" onTextChange={(text) => {}} />
        </div>
        <a className={styles.top} href="/">
          Topに戻る
        </a>
        <div className={styles.create}>
          <Button text="作成" />
        </div>
      </div>
    </div>
  );
};
