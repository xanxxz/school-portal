import React from 'react';
import styles from './TeacherCard.module.css';
import { deleteTeacher, type TeacherData } from '../../api/teachers';

interface TeacherCardProps {
  data: TeacherData;
  onDelete?: (id: number) => void;
}

export default function TeacherCard({ data, onDelete }: TeacherCardProps) {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    if (!token) return alert("Нет доступа");

    try {
      await deleteTeacher(data.id, token);
      if (onDelete) onDelete(data.id);
    } catch (err: any) {
      alert(err.message || "Ошибка удаления");
    }
  };

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
        {token === "admin" && (
          <button onClick={handleDelete} className={styles.deleteBtn}>
            Удалить
          </button>
        )}
      </div>
    </div>
  );
}
