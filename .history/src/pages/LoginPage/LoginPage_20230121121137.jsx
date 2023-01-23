import {
  Logo,
  LoginContainer,
  Form,
  SignUp,
  BlueButton,
  Button,
  SocialLogin,
} from './style';

const LoginPage = () => {
  // TODO: 인풋창, 버튼 3개 위치 어떻게 해봐....
  // TODO: css 로고 가운데로 오고 헤더는 사라져야함
  return (
    <LoginContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        <Id>
          이메일
          <Input placeholder={'clonecodingsharespace@gmail.com'} />
        </Id>

        <PassWord>
          비밀번호
          <Input />
        </PassWord>
      </Form>
      <BlueButton>로그인</BlueButton>

      <SignUp>
        <div>아이디가 없으신가요?</div>
        <div> 회원가입</div>
      </SignUp>
      <SocialLogin>
        <Button>구글 로그인</Button>
        <Button>Git Hub 로그인</Button>
      </SocialLogin>
    </LoginContainer>
  );
};

export default LoginPage;
