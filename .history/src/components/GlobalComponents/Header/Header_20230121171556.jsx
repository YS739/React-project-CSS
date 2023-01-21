import { Container, Logo, LoginToggle, SignUp, Login } from './style.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  // TODO: 네비게이트 적용
  // const navigate = useNavigate();

  // 회원가입 <-> 마이페이지 / 로그인 <-> 로그아웃 토글
  const [loginCheck, setLoginCheck] = useState(false);
  return (
    <Container>
      <Logo src={require('../../../assets/css_logo.png')} alt="css" />
      <LoginToggle>
        {loginCheck ? (
          <>
            <SignUp>마이페이지</SignUp>
            <SignUp onClick={() => setLoginCheck((e) => !e)}>로그아웃</SignUp>
          </>
        ) : (
          <>
            <SignUp>회원가입</SignUp>
            <SignUp>로그인</SignUp>
          </>
        )}
      </LoginToggle>
    </Container>
  );
};

export default Header;
