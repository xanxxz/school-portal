import { useState } from 'react';
import styles from './Schedule.module.css';
import type { DaySchedule } from '../../api/schedule';

interface ScheduleProps {
  data: DaySchedule[];
}

export default function Schedule({ data }: ScheduleProps) {
  if (!data.length) {
    return <p>Расписание отсутствует</p>;
  }

  const weekOrder = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница"
  ];


  const sortedDays = data
    .slice()
    .sort(
      (a, b) =>
        weekOrder.indexOf(a.weekday) -
        weekOrder.indexOf(b.weekday)
    );

  const [activeDay, setActiveDay] = useState<string>(
    sortedDays[0]?.weekday || ''
  );
  
  const currentDay = data.find(day => day.weekday === activeDay);

  // 🔥 сортировка классов по возрастанию номера
  const sortedClasses = currentDay?.classes
    .slice()
    .sort((a, b) => {
      const getNumber = (str: string) =>
        parseInt(str.match(/\d+/)?.[0] || '0', 10);

      return getNumber(a.class) - getNumber(b.class);
    });

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {sortedDays.map(day => (
          <button
            key={day.weekday}
            className={`${styles.tab} ${
              activeDay === day.weekday ? styles.activeTab : ''
            }`}
            onClick={() => setActiveDay(day.weekday)}
          >
            {day.weekday}
          </button>
        ))}
      </div>

      <div className={styles.dayContent}>
        {sortedClasses?.map(cls => (
          <div key={cls.class} className={styles.classBlock}>
            <div className={styles.classHeader}>
              <h3 className={styles.classTitle}>{cls.class}</h3>
              <span className={styles.cabinet}>
                Кабинет: {cls.cabinet}
              </span>
            </div>

            <ul className={styles.lessonList}>
              {cls.lessons.map(lesson => (
                <li key={lesson.number} className={styles.lessonItem}>
                  <span className={styles.lessonNumber}>
                    {lesson.number}.
                  </span>
                  <span className={styles.lessonSubject}>
                    {lesson.subject}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
