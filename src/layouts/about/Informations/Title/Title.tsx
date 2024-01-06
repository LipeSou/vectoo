import styles from './title.module.css';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (<h2 className={styles.title}>{title}</h2>);
}
