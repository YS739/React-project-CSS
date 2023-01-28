import { Container, Logo, LoginToggle, Nav } from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../AlertUI/AlertUI';

const Header = () => {
  // TODO: 네비게이트 적용 - 로고, 회원가입, 로그인 버튼 클릭 시
  const navigate = useNavigate();
  const auth = getAuth();

  const currentUser = auth.currentUser;
  const userNickName = currentUser?.displayName;
  // // 로그아웃
  const LogOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return <AlertUI title={'로그아웃되었습니다.'} onClose={onClose} />;
          },
        });
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Container>
      <Logo
        onClick={() => navigate('/')}
        src={require('../../../assets/css_logo.png')}
        alt="css"
      />

      <LoginToggle>
        {currentUser ? (
          <>
            <Nav>{userNickName}님 </Nav>
            <Nav onClick={() => navigate('/my')}>마이페이지</Nav>
            <Nav onClick={LogOutHandler}>로그아웃</Nav>
          </>
        ) : (
          <>
            <Nav onClick={() => navigate('/signUp')}>회원가입</Nav>
            <Nav onClick={() => navigate('/login')}>로그인</Nav>
          </>
        )}
      </LoginToggle>
    </Container>
  );
};

export default Header;
