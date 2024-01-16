import styles from './background.module.css';

export default function Background() {
  return (
    <label htmlFor="checkboxId" className={styles.label}>
      <input
        type="checkbox"
        id="checkboxId"
        checked
        // onChange={handleCheckboxChange}
      />
      Background

    </label>
  );
}
