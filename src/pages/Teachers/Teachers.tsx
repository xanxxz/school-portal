import { useEffect, useState } from 'react';
import styles from './Teachers.module.css';
import { getTeachers, type TeacherData, deleteTeacher } from '../../api/teachers';
import TeacherCardList from '../../components/TeacherCardList/TeacherCardList';
import Loader from '../../components/Loader/Loader';
import AddTeacher from '../../components/AddTeacher/AddTeacher';

export default function Teachers() {
  const [teachers, setTeachers] = useState<TeacherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeachers()
      .then(setTeachers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddTeacher = (newTeacher: TeacherData) => {
    setTeachers(prev => [newTeacher, ...prev]);
  };

  const handleDeleteTeacher = async (id: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await deleteTeacher(id, token);
      setTeachers(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Преподаватели</h1>
      <div className={styles.container}>
        {loading ? (
          <Loader size={80} />
        ) : (
          <TeacherCardList teachers={teachers} onDelete={handleDeleteTeacher} />
        )}
      </div>
      {localStorage.getItem('token') === 'admin' && (
        <AddTeacher onAddTeacher={handleAddTeacher} />
      )}
    </div>
  );
}