import React from "react";
import styles from "./NewsCard.module.css";
import type { CardData } from "../../api/news";

interface NewsCardProps {
  data: CardData;
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  const formattedDate = new Date(data.date).toLocaleDateString("ru-RU");

  return (
    <div className={styles.card}>
      {data.imageUrl && (
        <img src={data.imageUrl} alt={data.title} className={styles.cardImg} />
      )}
      <div className={styles.cardContent}>
        <div className={styles.categories}>
          {data.category.map((cat, idx) => (
            <span key={idx} className={styles.category}>
              {cat}
            </span>
          ))}
        </div>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardDescription}>{data.description}</p>
        <p className={styles.cardDate}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NewsCard;

