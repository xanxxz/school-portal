import { useEffect, useState } from 'react';
import styles from './Teachers.module.css';
import { getTeachers, type TeacherData } from '../../api/teachers';
import TeacherCardList from '../../components/TeacherCardList/TeacherCardList';
import Loader from '../../components/Loader/Loader';

export default function Teachers() {
  const [teachers, setTeachers] = useState<TeacherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeachers()
      .then((data: TeacherData[]) => setTeachers(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Преподаватели</h1>
      <div className={styles.container}>
        {loading ? (
          <Loader size={80} />
        ) : (
          <TeacherCardList teachers={teachers} />
        )}
      </div>
    </div>
  );
}
