import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./NewsCardList.module.css";
import type { CardData } from "../../api/news";

interface NewsCardListProps {
  cards: CardData[];
  onDelete?: (id: number) => void; // добавляем onDelete в пропсы
}

const NewsCardList: React.FC<NewsCardListProps> = ({ cards, onDelete }) => {
  if (!cards.length) return <p className={styles.empty}>Карточек нет</p>;

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <NewsCard key={card.id} data={card} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NewsCardList;