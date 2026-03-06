import { useState } from 'react';
import { createNews, type CardData } from '../../api/news';
import styles from './AddNews.module.css';

type AddNewsProps = {
  onAddNews: (news: CardData) => void;
};

export default function AddNews({ onAddNews }: AddNewsProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Нет токена, войдите в админку');
      return;
    }

    try {
      const newNews = await createNews(
        {
          title,
          description,
          category: category.split(',').map(c => c.trim()),
          imageUrl: imageUrl || undefined
        },
        token
      );

      onAddNews(newNews); // сразу добавляем новость в список на странице

      setSuccess('Новость добавлена!');
      setTitle('');
      setDescription('');
      setCategory('');
      setImageUrl('');
    } catch (err: any) {
      setError(err.message || 'Ошибка добавления новости');
    }
  };

  return (
    <div className={styles.addNewsWrapper}>
      <h2>Добавить новость</h2>
      <form onSubmit={handleSubmit} className={styles.addNewsForm}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Категории через запятую"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ссылка на изображение (опционально)"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <button type="submit">Добавить новость</button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
}