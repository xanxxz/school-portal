import React from 'react';
import TeacherCard from '../TeacherCard/TeacherCard';
import styles from './TeacherCardList.module.css';
import type { TeacherData } from '../../api/teachers';

interface TeacherCardListProps {
  teachers: TeacherData[];
}

export default function TeacherCardList({ teachers }: TeacherCardListProps) {
  if (!teachers.length) return <p className={styles.empty}>Преподавателей нет</p>;

  return (
    <div className={styles.grid}>
      {teachers.map(t => <TeacherCard key={t.id} data={t} />)}
    </div>
  );
}
