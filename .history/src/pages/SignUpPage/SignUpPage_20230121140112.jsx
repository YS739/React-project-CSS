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
} from './style';

const SignUpPage = () => {
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
      <Login>
        이미 가입 하셨나요?
        <link to={'/login'} style={{ font: 'bold' }}>
          로그인
        </link>
      </Login>
    </SignUpContainer>
  );
};

export default SignUpPage;
