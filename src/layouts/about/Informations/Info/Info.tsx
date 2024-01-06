import styles from './info.module.css';

interface InfoProps {
  info: string;
}

export default function Info({ info }: InfoProps) {
  return (<p className={styles.info}>{info}</p>);
}
