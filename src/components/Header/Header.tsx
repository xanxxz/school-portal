import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>МАОУ СОШ №28 г. Балаково</h1>
        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/schedule">Расписание</Link>
          <Link to="/news">Новости</Link>
          <Link to="/teachers">Преподаватели</Link>
          <Link to="/documents">Документы</Link>
          <Link to="/feedback">Обратная связь</Link>
          <Link to="/gallery">Галерея</Link>
          <Link to="/organization">О школе</Link>
        </nav>
      </div>
    </header>
  );
}
