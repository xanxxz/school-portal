import React from 'react';
import styles from './TeacherCard.module.css';
import type { TeacherData } from '../../api/teachers';

interface TeacherCardProps {
  data: TeacherData;
}

export default function TeacherCard({ data }: TeacherCardProps) {
  return (
    <div className={styles.card}>
      {data.photoUrl && <img src={data.photoUrl} alt={data.name} className={styles.photo} />}
      <div className={styles.content}>
        <h3 className={styles.name}>{data.name}</h3>
        <p className={styles.position}>{data.position}</p>
        {data.bio && <p className={styles.bio}>{data.bio}</p>}
        {data.subjects && data.subjects.length > 0 && (
          <div className={styles.subjects}>
            {data.subjects.map((subj, idx) => (
              <span key={idx} className={styles.subject}>{subj}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
