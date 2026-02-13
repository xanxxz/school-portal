import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <span>Телефон</span>
        <p>
          <a href="tel:+78453393380">8 (8453) 39-33-80</a>
        </p>
      </div>
      <div className={styles.div}>
        <span>Факс</span>
        <p>
          <a href="tel:+78453393380">8 (8453) 39-33-80</a>
        </p>
      </div>
      <div className={styles.div}>
        <span>E-mail</span>
        <p>
          <a href="mailto:sh28@rambler.ru">sh28@rambler.ru</a>
        </p>
      </div>
      <div className={styles.div}>
        <p>
           <a href='/docs/politic.pdf' download className={styles.link}>Политика конфиденциальности</a>
        </p>
        <img />
      </div>
    </footer>
  );
}
