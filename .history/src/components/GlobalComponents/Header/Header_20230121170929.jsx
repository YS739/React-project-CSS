import { Container, Logo, LoginToggle, SignUp, Login } from './style.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  // TODO: 네비게이트 적용
  // const navigate = useNavigate();

  // TODO: 로그인 여부에 따라 내비바 토글 적용
  const [loginCheck, setLoginCheck] = useState(false);

  // TODO: 회원가입 <-> 마이페이지 / 로그인 <-> 로그아웃 토글
  return (
    <Container>
      <Logo src={require('../../../assets/css_logo.png')} alt="css" />
      <LoginToggle>
        {loginCheck ? (
          <>
            <SignUp>회원가입</SignUp>
            <SignUp>로그인</SignUp>
          </>
        ) : (
          <>
            <SignUp>마이페이지</SignUp>
            <SignUp onClick={() => setLoginCheck((e) => !e)}>로그아웃</SignUp>
          </>
        )}
      </LoginToggle>
    </Container>
  );
};

export default Header;
