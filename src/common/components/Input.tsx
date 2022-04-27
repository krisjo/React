import styles from "./Input.module.css";
interface Props {
  label: string;
  initialValue: number;
  onInputChange: (value: number) => void;
}
export const Input = (props: Props) => {
  return (
    <label className="form-label">
      {props.label}
      <input
        type="number"
        className={styles.input}
        value={props.initialValue}
        onChange={(e) => props.onInputChange(Number(e.target.value))}
      />
    </label>
  );
};
