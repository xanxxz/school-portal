import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Header token={token} onLogout={handleLogout} />
      <main className={styles.app}>
        <AppRoutes token={token} onLogin={handleLogin} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;