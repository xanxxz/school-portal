import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Schedule from '../pages/Schedule/Schedule';
import News from '../pages/News/News';
import Teachers from '../pages/Teachers/Teachers';
import Documents from '../pages/Documents/Documents';
import Feedback from '../pages/Feedback/Feedback';
import Gallery from '../pages/Gallery/Gallery';
import Organization from '../pages/Organization/Organization';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';

interface AppRoutesProps {
  token: string | null;
  onLogin: (token: string) => void;
}

export default function AppRoutes({ onLogin }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/news" element={<News />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}