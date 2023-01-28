import { Container, Logo, LoginToggle, Nav } from './style';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../AlertUI/AlertUI';

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userNickName = currentUser?.displayName;
  // 로그아웃
  const LogOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return <AlertUI title={'로그아웃 되었습니다.'} onClose={onClose} />;
          },
        });
        // 로그아웃 성공
        navigate('/');
      })
      .catch((error) => {
        // 로그아웃 실패
        confirmAlert({
          customUI: ({ onClose }) => {
            return <AlertUI title={'로그아웃 되지 않았습니다.'} onClose={onClose} />;
          },
        });
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
