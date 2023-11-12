import styles from "./Button.module.css";
export const Button: React.FC<Props> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
type Props = {
  text: string;
};
