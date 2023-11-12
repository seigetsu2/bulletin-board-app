import styles from "./TextBox.module.css";

export const TextBox: React.FC<Props> = ({
  placeholder,
  onTextChange,
  value,
}) => {
  return (
    <input
      className={styles.box}
      type="text"
      placeholder={placeholder}
      onChange={(event) => onTextChange(event.target.value)}
      value={value}
    />
  );
};

type Props = {
  placeholder: string;
  onTextChange: (arg: string) => void;
  value: string;
};
