import { SignUpContainer, Logo, Form, Input, BlueButton, Login } from './style';

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Logo src={require('../../assets/css_logo.png')} alt="css" />
      <Form>
        이메일
        <Input placeholder={'css@gmail.com'} />
        닉네임
        <Input placeholder={'닉네임을 적어주세요'} />
        비밀번호
        <Input />
        비밀번호 확인
        <Input />
      </Form>
      <BlueButton>회원가입</BlueButton>
      <Login>이미 가입 하셨나요? 로그인</Login>
    </SignUpContainer>
  );
};

export default SignUpPage;
