import { useState } from 'react';
import { createTeacher, type TeacherData } from '../../api/teachers';
import styles from './AddTeacher.module.css';

interface AddTeacherProps {
  onAddTeacher: (teacher: TeacherData) => void;
}

export default function AddTeacher({ onAddTeacher }: AddTeacherProps) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [bio, setBio] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [subjects, setSubjects] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Нет токена, войдите в админку');
      return;
    }

    try {
      const newTeacher = await createTeacher(
        {
          name,
          position,
          bio: bio || undefined,
          photoUrl: photoUrl || undefined,
          subjects: subjects.split(',').map(s => s.trim())
        },
        token
      );

      onAddTeacher(newTeacher); // сразу добавляем в список
      setSuccess('Преподаватель добавлен!');
      setName('');
      setPosition('');
      setBio('');
      setPhotoUrl('');
      setSubjects('');
    } catch (err: any) {
      setError(err.message || 'Ошибка добавления преподавателя');
    }
  };

  return (
    <div className={styles.addTeacherWrapper}>
      <h2>Добавить преподавателя</h2>
      <form onSubmit={handleSubmit} className={styles.addTeacherForm}>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Должность" value={position} onChange={e => setPosition(e.target.value)} required />
        <textarea placeholder="Биография" value={bio} onChange={e => setBio(e.target.value)} />
        <input type="text" placeholder="Ссылка на фото" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
        <input type="text" placeholder="Предметы через запятую" value={subjects} onChange={e => setSubjects(e.target.value)} />
        <button type="submit">Добавить преподавателя</button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
}