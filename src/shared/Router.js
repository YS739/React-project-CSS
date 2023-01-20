import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage/DetailPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
