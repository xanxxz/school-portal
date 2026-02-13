import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./NewsCardList.module.css";
import type { CardData } from "../../api/news";

interface NewsCardListProps {
  cards: CardData[];
}

const NewsCardList: React.FC<NewsCardListProps> = ({ cards }) => {
  if (!cards.length) return <p className={styles.empty}>Карточек нет</p>;

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <NewsCard key={card.id} data={card} />
      ))}
    </div>
  );
};

export default NewsCardList;
