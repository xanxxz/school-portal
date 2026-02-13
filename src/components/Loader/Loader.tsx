import styles from './Loader.module.css';

interface LoaderProps {
  size?: number;
}

export default function Loader({ size = 80 }: LoaderProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} style={{ width: size, height: size }}></div>
    </div>
  );
}
