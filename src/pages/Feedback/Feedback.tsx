import styles from './Feedback.module.css';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

export default function Feedback() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Обратная связь</h1>
      <p className={styles.text}>Есть предложения по организации учебного процесса или знаете, как сделать школу лучше?</p>
      <FeedbackForm />
    </div>
  );
}
