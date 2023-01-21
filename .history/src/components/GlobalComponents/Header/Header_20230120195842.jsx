import Container from './style.js';

const Header = () => {
  return (
    <Container>
      <img src="public/css_logo.png" alt="css" />
      <loginToggle>
        <div>회원가입</div>
        <div>로그인</div>
      </loginToggle>
    </Container>
  );
};

export default Header;
