import { LoginContainer, Form, SignUp } from './style';

const LoginPage = () => {
  return (
    <LoginContainer>
      <Form>
        아이디
        <input />
        비밀번호
        <input />
      </Form>
      <SignUp>
        <div>아직 회원이 아니세요?</div>
        <div> 회원가입하기</div>
      </SignUp>
    </LoginContainer>
  );
};

export default LoginPage;
