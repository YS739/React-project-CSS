import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage/DetailPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Layout from '../components/GlobalComponents/Layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:videoId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
