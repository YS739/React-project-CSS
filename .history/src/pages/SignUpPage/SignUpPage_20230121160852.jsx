import {
  SignUpContainer,
  Logo,
  Form,
  Id,
  Name,
  PassWord,
  Input,
  BlueButton,
  Login,
  ToLogin,
} from './style';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input placeholder={'css@gmail.com'} />
        </Id>
        <Name>
          닉네임
          <Input placeholder={'닉네임을 적어주세요'} />
        </Name>
        <PassWord>
          비밀번호
          <Input />
        </PassWord>
        <PassWord>
          비밀번호 확인
          <Input />
        </PassWord>
      </Form>
      <BlueButton>회원가입</BlueButton>
      <ToLogin>
        이미 가입 하셨나요?
        <Login onClick={() => navigate('/login')}>로그인</Login>
      </ToLogin>
    </SignUpContainer>
  );
};

export default SignUpPage;
