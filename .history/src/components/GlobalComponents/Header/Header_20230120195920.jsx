import { Container, LoginToggle } from './style.js';

const Header = () => {
  return (
    <Container>
      <img src="public/css_logo.png" alt="css" />
      <LoginToggle>
        <div>회원가입</div>
        <div>로그인</div>
      </LoginToggle>
    </Container>
  );
};

export default Header;
