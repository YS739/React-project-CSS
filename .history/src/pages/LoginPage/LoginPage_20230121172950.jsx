import {
  Logo,
  LoginContainer,
  Form,
  Id,
  PassWord,
  Input,
  ToSignUp,
  SignUp,
  BlueButton,
  Button,
  SocialLogin,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = ({ setLoginCheck }) => {
  // TODO: 헤더는 사라져야함
  const navigate = useNavigate();
  const [loginCheck, setLoginCheck] = useState(false);

  return (
    <LoginContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input placeholder={'css@gmail.com'} />
        </Id>
        <PassWord>
          비밀번호
          <Input />
        </PassWord>
      </Form>
      <BlueButton onClick={() => setLoginCheck((e) => !e)}>로그인</BlueButton>

      <ToSignUp>
        아이디가 없으신가요?
        <SignUp onClick={() => navigate('/signUp')}> 회원가입</SignUp>
      </ToSignUp>
      <SocialLogin>
        <Button onClick={() => setLoginCheck((e) => !e)}>구글 로그인</Button>
        <Button onClick={() => setLoginCheck((e) => !e)}>Git Hub 로그인</Button>
      </SocialLogin>
    </LoginContainer>
  );
};

export default LoginPage;
