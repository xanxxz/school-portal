import { useState } from 'react';
import styles from './FeedbackForm.module.css';
import Loader from '../Loader/Loader';
import type { FeedbackData } from '../../api/feedback';
import { sendFeedback } from '../../api/feedback';

export default function FeedbackForm() {
  const [form, setForm] = useState<FeedbackData>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendFeedback(form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Ошибка отправки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? <Loader size={80}/> : 'Отправить'}
        </button>
      </form>
      {success && <p className={styles.success}>Сообщение отправлено!</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
