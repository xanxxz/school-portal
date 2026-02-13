import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import sytles from './App.module.css'

function App() {
  return (
    <Router>
      <Header />
      <main className={sytles.app}>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
