import styles from "./Button.module.css";
export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
type Props = {
  text: string;
  onClick: () => void;
};
