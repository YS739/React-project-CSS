import { Container, Logo, LoginToggle } from './style.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
  let currentUserDi = localStorage.getItem('id');

  return (
    <Container>
      <Logo btnName="home" onClick={() => navigate('/')}>
        <img src={require('../../../assets/css_logo.png')} alt="css" />
        <LoginToggle>
          <div
            dp={currentUserDi === null ? 'block' : 'none'}
            onClick={() => navigate('/signUp')}
          >
            회원가입
          </div>
          <div
            dp={currentUserDi === null ? 'block' : 'none'}
            onClick={() => navigate('/login')}
          >
            로그인
          </div>
        </LoginToggle>
      </Logo>
    </Container>
  );
};

export default Header;
