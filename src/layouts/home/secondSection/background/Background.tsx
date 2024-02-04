import styles from './background.module.css';

export default function Background() {
  return (
    <div className={styles.background}>

      <label htmlFor="checkboxId" className={styles.label}>
        <input
          type="checkbox"
          id="checkboxId"
          checked
        />
        Background

      </label>
    </div>

  );
}
