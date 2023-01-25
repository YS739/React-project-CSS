import { Container, Logo, LoginToggle, Nav } from './style.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Header = () => {
  // TODO: 네비게이트 적용 - 로고, 회원가입, 로그인 버튼 클릭 시
  // const navigate = useNavigate();

  // TODO: 로그인한 회원의 이름을 띄운다
  const [user, setUser] = useState({});
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // 닉네임 불러오기
  const currentUser = auth.currentUser;
  const userNickName = currentUser?.displayName;
  console.log('userNickName :>> ', userNickName);
  // 로그아웃
  const LogOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        alert('로그아웃되었습니다.');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // 회원가입 <-> 마이페이지 / 로그인 <-> 로그아웃 토글
  // const [loginCheck, setLoginCheck] = useState(false);
  return (
    <Container>
      <Logo
        src={require('../../../assets/css_logo.png')}
        alt="css"
        // onClick={() => navigate('/')}
      />
      <LoginToggle>
        {user ? (
          <>
            `${userNickName}님, `<Nav>마이페이지</Nav>
            <Nav
              onClick={LogOutHandler}
              //     () => setLoginCheck((e) => !e)}
            >
              로그아웃
            </Nav>
          </>
        ) : (
          <>
            <Nav>회원가입</Nav>
            <Nav>로그인</Nav>
          </>
        )}
      </LoginToggle>
    </Container>
  );
};

export default Header;
