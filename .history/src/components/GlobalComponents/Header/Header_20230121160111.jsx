import { Container, Logo, LoginToggle, SignUp, Login } from './style.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // TODO: 네비게이트 적용
  // const navigate = useNavigate();

  // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
  let currentUserId = localStorage.getItem('id');

  // TODO: 회원가입 <-> 마이페이지 / 로그인 <-> 로그아웃 토글
  // FIXME: 회원가입, 로그인 버튼 사이에 패딩주기
  return (
    <Container>
      <Logo src={require('../../../assets/css_logo.png')} alt="css" />
      <LoginToggle>
        <SignUp>회원가입</SignUp>
        <Login>로그인</Login>
      </LoginToggle>
    </Container>
  );
};

export default Header;
