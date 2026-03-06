import { useState } from 'react';
import styles from './Login.module.css';
import { loginUser } from '../../api/auth';

interface LoginProps {
  onLogin: (token: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const { token } = await loginUser(login, password);
      onLogin(token); // сразу обновляем Header
      setLogin('');
      setPassword('');
      alert('Вы успешно вошли');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Вход в систему</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Логин
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}