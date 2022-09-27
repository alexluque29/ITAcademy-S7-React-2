import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { App } from './App';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<App />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};