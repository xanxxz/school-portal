import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
    </div>
  );
}
