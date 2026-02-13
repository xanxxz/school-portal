import { useEffect, useState } from 'react';
import styles from './News.module.css';
import { getNews, type CardData } from '../../api/news';
import NewsCardList from '../../components/NewsCardList/NewsCardList';
import Loader from '../../components/Loader/Loader';

export default function News() {
  const [news, setNews] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then(setNews)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Новости</h1>
      <div className={styles.newsList}>
        {loading ? (
          <Loader size={80} />
        ) : (
          <NewsCardList cards={news} />
        )}
      </div>
    </div>
  );
}
