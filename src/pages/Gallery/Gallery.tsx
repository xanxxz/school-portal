import { useState } from 'react';
import styles from './Gallery.module.css';

const images = [
  { id: 1, url: '/gallery/Front.jpg' },
  { id: 2, url: '/gallery/Shkola.jpg' },
  { id: 3, url: '/gallery/Stadion.jpg' },
  { id: 4, url: '/gallery/Vid.jpg' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nextSlide = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevSlide = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Галерея</h1>

      <div className={styles.grid}>
        {images.map((img, index) => (
          <div
            key={img.id}
            className={styles.card}
            onClick={() => setActiveIndex(index)}
          >
            <img src={img.url} alt="" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.modal} onClick={() => setActiveIndex(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setActiveIndex(null)}>
              ✕
            </button>

            <button className={styles.arrowLeft} onClick={prevSlide}>
              ‹
            </button>

            <img
              src={images[activeIndex].url}
              alt=""
              className={styles.modalImage}
            />

            <button className={styles.arrowRight} onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
