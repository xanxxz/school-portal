import React from "react";
import styles from "./NewsCard.module.css";
import { deleteNews, type CardData } from "../../api/news";

interface NewsCardProps {
  data: CardData;
  onDelete?: (id: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ data, onDelete  }) => {
  const formattedDate = new Date(data.date).toLocaleDateString("ru-RU");
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    if (!token) return alert("Нет доступа");
    if (!window.confirm("Вы уверены, что хотите удалить эту новость?")) return;

    try {
      await deleteNews(data.id, token);
      if (onDelete) onDelete(data.id);
    } catch (err: any) {
      alert(err.message || "Ошибка удаления");
    }
  };

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
        
        {/* Кнопка удаления видна только админу */}
        {token === "admin" && (
          <button onClick={handleDelete} className={styles.deleteBtn}>
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCard;

