import Header from './style.js';

const Header = () => {
  return (
    <Header>
      <img src="public/css_logo.png" alt="css" />
      <loginToggle>
        <div>회원가입</div>
        <div>로그인</div>
      </loginToggle>
    </Header>
  );
};

export default Header;