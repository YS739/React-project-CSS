import { Container, Logo, LoginToggle, Nav } from './style.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  // TODO: 네비게이트 적용 - 로고, 회원가입, 로그인 버튼 클릭 시
  // const navigate = useNavigate();

  // 회원가입 <-> 마이페이지 / 로그인 <-> 로그아웃 토글
  const [loginCheck, setLoginCheck] = useState(false);
  return (
    <Container>
      <Logo src={require('../../../assets/css_logo.png')} alt="css" />
      <LoginToggle>
        {loginCheck ? (
          <>
            {/* {auth.currentUser.name} */}
            <Nav>마이페이지</Nav>
            {/* onClick = {()=> app.auth().signOut()} */}
            <Nav onClick={() => setLoginCheck((e) => !e)}>로그아웃</Nav>
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