import styles from "./Header.module.css";
export const Header: React.FC<Props> = ({ title, buttonText, onClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </header>
  );
};

type Props = {
  title: string;
  buttonText: string;
  onClick: () => void;
};
